"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { createTheme, ThemeProvider } from "@mui/material";

const CustomFontTheme = createTheme({
    typography: {
        fontSize: 20,
    },
    palette: {
        // primary: {
        //     main: '#0971f1',
        // },
        mode: "dark",
        primary: {
            main: "#b28374",
        },
        // secondary: {
        //     main: "#9F7969",
        //     // contrastText: '#fff',
        // },
    },
});

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        >
            <ThemeProvider theme={CustomFontTheme}>{children}</ThemeProvider>
        </GoogleReCaptchaProvider>
    );
}
