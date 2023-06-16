import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />

            <body>
                <Main />
                <NextScript />
                <script
                    src="https://open.spotify.com/embed-podcast/iframe-api/v1"
                    async
                ></script>
            </body>
        </Html>
    );
}
