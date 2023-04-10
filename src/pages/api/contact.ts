// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as SibApiV3Sdk from "@sendinblue/client";

type Data = {
    name?: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // handler
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { subject, firstName, lastName, message, email } = req.body;

    if (subject === "" || firstName === "" || message === "" || email === "") {
        return res.status(400).json({ error: "Bad request" });
    }

    // domain
    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: "Internal server error" });
    }

    apiInstance.setApiKey(
        SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
        apiKey
    );

    try {
        await apiInstance.sendTransacEmail({
            subject: subject,
            to: [{ email, name: `${firstName} ${lastName}` }],
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
        return res.status(500).json({ error: "Internal server error" });
    }

    res.status(200).json({});
}
