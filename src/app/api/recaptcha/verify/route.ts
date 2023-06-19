import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as process from "process";

import { RecaptchaApiSiteVerifyPayload } from "./types";

export async function POST(req: NextRequest) {
    // handler
    const body = await req.json()
    const { token } = body;
    console.log(token);
    // console.log();

    if (token === "") {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    //domain

    // does not return error
    const { data } = await axios.post<RecaptchaApiSiteVerifyPayload>(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
    );

    if (!data.success) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (data.score <= 0.5) {
        return NextResponse.json(
            { error: "User failed authentication" },
            { status: 403 }
        );
    }

    return NextResponse.json({});
}
// https://www.google.com/recaptcha/api/siteverify
