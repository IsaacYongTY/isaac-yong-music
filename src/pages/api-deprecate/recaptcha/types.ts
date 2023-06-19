export type RecaptchaApiSiteVerifyPayload = {
    success: boolean;
    challenge_ts: string;
    hostname: string;
    score: number;
    action: string;
}