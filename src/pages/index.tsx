import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/src/components/Header";
import SocialMedia from "@/src/pages/coming-soon";
import { ENABLE_COMING_SOON_REDIRECT } from "flags";
import classnames from "classnames/bind";
import ContactForm from "@/src/components/ContactForm";
import { ThemeProvider, createTheme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

const cx = classnames.bind(styles);

const CustomFontTheme = createTheme({
    typography: {
        fontSize: 20,
    },

});
export default function Home() {
    if (ENABLE_COMING_SOON_REDIRECT) {
        return <SocialMedia />;
    }

    return (
        <>
            <Head>
                <title>
                    Isaac Yong&apos;s Official Website | 楊征宇 官方網站
                </title>
                <meta
                    name="description"
                    content="Isaac Yong (楊征宇) is a singer-songwriter from Singapore. 代表作品：《深夜》 "
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className={cx("main")}>
                <ThemeProvider theme={CustomFontTheme}>
                    <Header />
                    {/*// TODO: refactor to separate component*/}
                    <div className={cx("section-header")}>
                        <h1>Performance Schedule</h1>
                    </div>
                    <ContactForm />
                </ThemeProvider>
            </main>
        </>
    );
}
