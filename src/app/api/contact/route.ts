import { NextRequest, NextResponse } from 'next/server';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';
import { buildContactEmail } from './emailTemplate';

const RECAPTCHA_ACTION = 'contact';
const SCORE_THRESHOLD = 0.5;

const recaptchaClient = new RecaptchaEnterpriseServiceClient({
    fallback: true,
    projectId: process.env.GOOGLE_CLOUD_PROJECT,
});

type AssessmentResult =
    | { label: 'NOT_BAD' }
    | { label: 'BAD'; reason: 'INVALID_TOKEN' | 'ACTION_MISMATCH' | 'SCORE_TOO_LOW' };

async function createAssessment(token: string): Promise<AssessmentResult> {
    const projectPath = recaptchaClient.projectPath(process.env.GOOGLE_CLOUD_PROJECT!);

    const [response] = await recaptchaClient.createAssessment({
        parent: projectPath,
        assessment: {
            event: {
                token,
                siteKey: process.env.RECAPTCHA_SITE_KEY,
                expectedAction: RECAPTCHA_ACTION,
            },
        },
    });

    if (!response.tokenProperties?.valid) {
        return { label: 'BAD', reason: 'INVALID_TOKEN' };
    }

    if (response.tokenProperties.action !== RECAPTCHA_ACTION) {
        return { label: 'BAD', reason: 'ACTION_MISMATCH' };
    }

    const score: number = response.riskAnalysis?.score ?? 0;
    if (score <= SCORE_THRESHOLD) {
        return { label: 'BAD', reason: 'SCORE_TOO_LOW' };
    }

    return { label: 'NOT_BAD' };
}

async function sendEmail(name: string, email: string, phone: string, message: string) {
    const credentials = Buffer.from(
        `${process.env.MJ_APIKEY_PUBLIC}:${process.env.MJ_APIKEY_PRIVATE}`
    ).toString('base64');

    const res = await fetch('https://api.mailjet.com/v3.1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify({
            Messages: [
                {
                    From: { Email: process.env.MJ_SENDER_EMAIL, Name: name },
                    To: [{ Email: process.env.MJ_RECIPIENT_EMAIL, Name: 'Quantum Homes' }],
                    ReplyTo: { Email: email, Name: name },
                    Subject: `New enquiry from ${name}`,
                    HTMLPart: buildContactEmail(name, email, phone, message),
                },
            ],
        }),
    });

    const data = await res.json();

    if (!res.ok || data.Messages?.[0]?.Status !== 'success') {
        throw new Error(`Mailjet error: ${JSON.stringify(data)}`);
    }

    return data;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => null);

        if (!body) {
            return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
        }

        const { name, email, phone, message, recaptchaToken } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
        }

        if (!recaptchaToken) {
            return NextResponse.json({ error: 'reCAPTCHA token missing.' }, { status: 400 });
        }

        const assessment = await createAssessment(recaptchaToken);
        if (assessment.label === 'BAD') {
            return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 403 });
        }

        const response = await sendEmail(name, email, phone, message);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('[contact] API error:', error?.message ?? error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
