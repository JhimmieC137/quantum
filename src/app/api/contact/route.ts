import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const RECAPTCHA_ACTION = 'contact';
const SCORE_THRESHOLD = 0.5;

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC!,
    process.env.MJ_APIKEY_PRIVATE!,
);

const recaptchaClient = new RecaptchaEnterpriseServiceClient();

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
    console.log('response')
    console.error(response)

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
            console.log('BAD')
            return NextResponse.json({ error: 'Bot verification failed. Please try again.' }, { status: 403 });
        }

        await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [
                {
                    From: {
                        Email: email,
                        Name: name,
                    },
                    To: [
                        {
                            Email: process.env.MJ_RECIPIENT_EMAIL,
                            Name: 'Quantum Homes',
                        },
                    ],
                    ReplyTo: {
                        Email: email,
                        Name: name,
                    },
                    Subject: `New enquiry from ${name}`,
                    HTMLPart: `
                        <h2 style="color:#b91c1c;">New Contact Form Submission</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                        <hr />
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, '<br />')}</p>
                    `,
                },
            ],
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('[contact] API error:', error?.message ?? error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again later.' },
            { status: 500 }
        );
    }
}
