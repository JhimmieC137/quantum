import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC!,
    process.env.MJ_APIKEY_PRIVATE!,
);

async function verifyRecaptcha(token: string): Promise<boolean> {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await res.json();
    return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
    const body = await req.json().catch(() => null);

    if (!body) {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const { name, email, phone, message, recaptchaToken } = body;

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    if (!recaptchaToken) {
        return NextResponse.json({ error: 'reCAPTCHA verification missing.' }, { status: 400 });
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
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
}
