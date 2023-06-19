// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";
import * as process from "process";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   const body = await req.json()

    const { subject, firstName, lastName, message, email } = body;

    if (subject === "" || firstName === "" || message === "" || email === "") {
        return NextResponse.json({ error: "Bad request" }, { status: 400});
    }

    // domain
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }

    apiInstance.setApiKey(
        SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
        apiKey
    );

    try {
        await apiInstance.sendTransacEmail({
            subject: subject,
            to: [{ email, name: `${firstName} ${lastName}` }],
            cc: [{ email: "contact@isaacyong.com", name: "Isaac Yong" }],
            sender: { email: "contact@isaacyong.com", name: "Isaac Yong" },
            htmlContent:
                `<p>Dear ${firstName},</p>` +
                "<p>Thank you for your message! We will get back to you within 3 working days.</p>" +
                "<div>Your message:</div><br />" +
                `<div>${message}</div><br />` +
                "<p>If you have any additional comments, you can always reply to this message.</p><br />" +
                "<div>Regards,</div>" +
                "<div>Isaac</div>",
        });
    } catch (err) {
        console.log(err);
        return new NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }

    return NextResponse.json({}, { status: 200});
}
