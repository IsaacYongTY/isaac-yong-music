// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { RecaptchaApiSiteVerifyPayload } from "@/src/pages/api-deprecate/recaptcha/types";

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

    const { token } = req.body;

    if (token === "") {
        return res.status(400).json({ error: "Invalid request" });
    }

    //domain

    // does not return error
    const { data } = await axios.post<RecaptchaApiSiteVerifyPayload>(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    if (!data.success) {
        return res.status(400).json({ error: "Invalid request" });
    }

    if (data.score <= 0.5) {
        return res.status(403).json({ error: "User failed authentication" });
    }

    res.status(200).json({});
}
// https://www.google.com/recaptcha/api/siteverify
