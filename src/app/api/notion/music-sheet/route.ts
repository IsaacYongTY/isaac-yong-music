// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import {
    PageObjectResponse,
    PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { MusicSheet } from "@/src/components/api/notion/types";

import { getMusicSheets } from "@/src/components/api/notion/domain";
import * as process from "process";

type Data = {
    data?: MusicSheet[];
    rawData?: PageObjectResponse[] | PartialPageObjectResponse[];
    error?: string;
};


export async function GET(req: NextApiRequest, res: NextApiResponse<Data>) {
    // const notion = new Client({
    //     auth: process.env.NEXT_PUBLIC_NOTION_SECRET_KEY || "",
    // });

    //
    // const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
    //
    // if (!databaseId) {
    //     return res.status(500).json({ error: "Internal server error" });
    // }

    const data = await getMusicSheets();

    return NextResponse.json(data)
}
