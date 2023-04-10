// import SibApiV3Sdk from "sib-api-v3-typescript";
//
// const sendTransactionSuccessEmailToSender = async () => {
//     let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
//
//     const apiKey = process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY;
//
//     if (!apiKey) {
//         throw Error().
//     }
//
//     apiInstance.setApiKey(
//         SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
//         apiKey
//     );
//
//     try {
//         await apiInstance.sendTransacEmail({
//             subject: "test",
//             to: [{ email: "isaac.yongty@gmail.com", name: "Isaac Yong" }],
//             htmlContent:
//                 "<div>Your message has been sent successfully. We will get back to you within 72 hours</div>",
//         });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// }