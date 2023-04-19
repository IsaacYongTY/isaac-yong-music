// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Client, isFullPage } from "@notionhq/client";
import {
    PageObjectResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MusicSheet } from "@/src/components/api/notion/types";

import { derivePageObjectResponseToMusicSheet } from "@/src/components/api/notion/utils";
import { getMusicSheets } from "@/src/components/api/notion/domain";

type Data = {
    data?: MusicSheet[];
    rawData?: PageObjectResponse[] | PartialPageObjectResponse[];
    error?: string;
};

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY || "",
});

const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // handler
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    if (!databaseId) {
        return res.status(500).json({ error: "Internal server error" });
    }

    const data = await getMusicSheets(databaseId)

    res.status(200).json({ data });
}


