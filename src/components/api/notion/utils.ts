import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { MusicSheet } from "@/src/pages/api/notion/types";
import { defaultMusicSheet } from "@/src/pages/api/notion/constants";

export const derivePageObjectResponseToMusicSheet = (
    res: PageObjectResponse
): MusicSheet => {
    const result = { ...defaultMusicSheet };

    // TODO: to decide if we should refactor
    const {
        title,
        artist,
        youTubeUrl,
        bilibiliUrl,
        myMusicSheetUrl,
        spotifyUrl,
        thumbnail,
    } = res.properties;

    if (!title || !artist || !myMusicSheetUrl) {
        return result;
    }

    if (title.type === "title" && title.title.length !== 0) {
        // console.log('title');
        // console.log(title.title);
        result.title = title.title[0].plain_text;
    }

    if (artist.type === "rich_text" && artist.rich_text.length !== 0) {
        result.artist = artist.rich_text[0].plain_text;
    }

    if (youTubeUrl && youTubeUrl.type === "url" && youTubeUrl.url !== null) {
        result.youTubeUrl = youTubeUrl.url || "";
    }
    if (bilibiliUrl && bilibiliUrl.type === "url" && bilibiliUrl.url !== null) {
        result.bilibiliUrl = bilibiliUrl.url;
    }

    if (myMusicSheetUrl && myMusicSheetUrl.type === "url" && myMusicSheetUrl.url !== null) {
        result.myMusicSheetUrl = myMusicSheetUrl.url;
    }

    if (spotifyUrl && spotifyUrl.type === "url" && spotifyUrl.url !== null) {
        result.spotifyUrl = spotifyUrl.url;
    }

    if (thumbnail.type === "files" && thumbnail.files.length !== 0) {
        if (thumbnail.files[0].type === "file") {
            result.thumbnail = thumbnail.files[0].file.url;
        }
    }

    return result;
};