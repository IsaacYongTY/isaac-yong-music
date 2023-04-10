import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

const CustomFontTheme = createTheme({
    typography: {
        fontSize: 20,
    },
});
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={CustomFontTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
