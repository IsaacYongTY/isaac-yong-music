import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

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
            main: "#9F7969",
        },
        // secondary: {
        //     main: "#9F7969",
        //     // contrastText: '#fff',
        // },
    },
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        >
            <ThemeProvider theme={CustomFontTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </GoogleReCaptchaProvider>
    );
}
