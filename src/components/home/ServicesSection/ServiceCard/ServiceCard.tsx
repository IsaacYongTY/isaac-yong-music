import React from "react";
import classnames from "classnames/bind";

import styles from "./ServiceCard.module.scss";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
} from "@mui/material";
import { StaticImageData } from "next/image";

const cx = classnames.bind(styles);

type MusicSheetCardProps = {
    title: string;
    description: string;
    imageUrl: StaticImageData;
    reverse?: boolean;
};
export default function ServiceCard({
    title,
    description,
    imageUrl,
    reverse = false,
}: MusicSheetCardProps): JSX.Element {
    return (
        <Card
            sx={{ display: "flex", borderRadius: "8px" }}
            className={cx("container")}
        >
            <CardContent
                className={cx("card-content-container", { reverse })}
                sx={{ ":last-child": { padding: 0 } }}
            >
                <Box className={cx("text-container")}>
                    <Box className={cx("text")}>
                        <CardHeader
                            title={title}
                            className={cx("card-header")}
                            sx={{ padding: 0 }}
                        />
                        <div className={cx("description")}>{description}</div>
                    </Box>

                    <Box>
                        <Button variant="outlined" size="large">
                            Learn more
                        </Button>
                    </Box>
                </Box>

                <CardMedia
                    component="img"
                    image={imageUrl.src}
                    width={150}
                    height={300}
                    className={cx("image-container")}
                />
            </CardContent>
        </Card>
    );
}
