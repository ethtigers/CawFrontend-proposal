import { Box, Stack, Tooltip, Typography } from "@mui/material";
import NextLink from 'next/link';

import Avatar from 'src/components/avatar/Avatar';
import Iconify from 'src/components/Iconify';
import { PATH_DASHBOARD } from "src/routes/paths";
import { MediaType } from "src/types/community-feed";
import createAvatar from "src/utils/createAvatar";
import { fDateTimeSuffix, fToNowShorter } from "src/utils/formatTime";
import { PostMenu } from "./PostMenu";

type Props = {
    src: string;
    verified: boolean;
    displayName: string;
    username: string;
    type: MediaType;
    date: Date,
    postId: string;
    txId: string;
    onDelete?: VoidFunction;
}

export default function PostAvatar(props: Props) {

    const { src, displayName, username, type, verified, date, postId, txId, onDelete } = props;
    const profileUrl = PATH_DASHBOARD.user.profile.replace(':username', username);

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <NextLink href={profileUrl} passHref>
                <Avatar
                    src={src}
                    alt={displayName}
                    color={src ? 'default' : createAvatar(displayName).color}
                    className={type === 'ntf' ? 'octagon' : ''}
                    sx={{ cursor: 'pointer' }}
                >
                    {createAvatar(displayName).name}
                </Avatar>
            </NextLink>
            <NextLink href={profileUrl} passHref >
                <Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                            variant="subtitle1"
                            sx={{ cursor: 'pointer' }}
                        >
                            {displayName || ''}
                        </Typography>
                        <span >.</span>
                        <Tooltip
                            title={fDateTimeSuffix(date)}
                        >
                            <span>
                                {fToNowShorter(date)}
                            </span>
                        </Tooltip>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography
                            variant="subtitle2"
                            sx={{ cursor: 'pointer' }}
                        >
                            {`@${username || ''}`}
                        </Typography>
                        {verified && <Iconify icon={'ic:sharp-verified-user'} width={15} height={15} color="green" />}
                    </Stack>
                </Stack>
            </NextLink>
            <Box sx={{ flexGrow: 1 }} />
            <PostMenu txId={txId} postId={postId} onDelete={onDelete} />
        </Stack >
    )
}