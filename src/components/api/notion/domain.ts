import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Client, isFullPage } from "@notionhq/client";
import { derivePageObjectResponseToMusicSheet } from "@/src/components/api/notion/utils";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY || "",
});

export const getMusicSheets = async (databaseId: string) => {
    try {
        const { results } = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "isActive",
                checkbox: {
                    equals: true,
                },
            },
        });

        //TODO: handle situation when result is more than 100 as that is the maximum

        const isFullPageResults: PageObjectResponse[] = [];

        results.forEach((result) => {
            if (!isFullPage(result)) {
                return;
            }

            isFullPageResults.push(result);
        });

        return isFullPageResults.map((d) =>
            derivePageObjectResponseToMusicSheet(d)
        );
    } catch (err) {
        throw err;
    }
};