import { Stack, Tooltip, Typography } from "@mui/material";
import { IconButtonAnimate } from "src/components/animate";
import Iconify from "src/components/Iconify";
import { kFormatter } from 'src/utils/formatNumber'

type Props = {
    likes: number;
    dislikes: number;
    comments: number;
    votes: number;
    shared: number;
}

export default function PostActions({ likes, comments, shared, dislikes }: Props) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            {LikeAction(likes)}
            {DislikeAction(dislikes)}
            {CommentsAction(comments)}
            {SharingAction(shared)}
        </Stack>
    );
}

function SharingAction(shared: number) {
    return (
        <Tooltip title="Interesting and share">
            <Stack direction="row" spacing={0} alignItems="center">
                <IconButtonAnimate>
                    <Iconify icon={'dashicons:share-alt'} width={20} height={20} />
                </IconButtonAnimate>
                <Typography>
                    {kFormatter(shared)}
                </Typography>
            </Stack>
        </Tooltip>
    );
}

function CommentsAction(comments: number) {
    return (
        <Tooltip title="Comments">
            <Stack direction="row" spacing={0} alignItems="center">
                <IconButtonAnimate>
                    <Iconify icon={'ic:baseline-comment'} width={20} height={20} />
                </IconButtonAnimate>
                <Typography>
                    {kFormatter(comments)}
                </Typography>
            </Stack>
        </Tooltip>
    );
}

function DislikeAction(dislikes: number) {
    return (
        <Tooltip title="Dislikes">
            <Stack direction="row" spacing={0} alignItems="center">
                <IconButtonAnimate>
                    <Iconify icon={'icon-park-outline:unlike'} width={20} height={20} />
                </IconButtonAnimate>
                <Typography>
                    {kFormatter(dislikes)}
                </Typography>
            </Stack>
        </Tooltip>
    );
}

function LikeAction(likes: number) {
    return (
        <Tooltip title="Likes">
            <Stack direction="row" spacing={0} alignItems="center">
                <IconButtonAnimate>
                    <Iconify icon={'flat-color-icons:like'} width={20} height={20} />
                </IconButtonAnimate>
                <Typography>
                    {kFormatter(likes)}
                </Typography>
            </Stack>
        </Tooltip>
    );
}

