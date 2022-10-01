import { useCallback } from "react";
import { Box, Divider, useTheme } from "@mui/material";
import { useSnackbar } from 'notistack'

import Markdown from 'src/components/Markdown';
import { PostDto } from "src/types/community-feed";
import PostAvatar from 'src/sections/post/PostAvatar';
import { TagType } from "src/components/tag-parser/parser";
import PostActions from './PostActions';

type Props = {
    post: PostDto
};

export default function Post({ post }: Props) {

    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const { id, content, likes, votes, commentsCount, transactionHash, date, author } = post;

    const handleHashTagClicked = useCallback((ht: string, type: TagType, element: any) => {
        enqueueSnackbar(`Clicked on ${ht} of type ${type}`, {
            variant: type === '#' ? 'warning' : type === '$' ? 'success' : type === '@' ? 'error' : type === 'url' ? 'info' : 'default',
        });
    }, [ enqueueSnackbar ]);

    const handleDeletePost = useCallback(() => {
        enqueueSnackbar(`Deleted post ${id}`, { variant: 'info' });
    }, [ enqueueSnackbar, id ]);

    return (
        <div id={`post-${id}`} >
            <PostAvatar
                src={author?.media.src}
                displayName={author?.name}
                username={author?.userName}
                type={author?.media.type}
                verified={author?.verified}
                date={date}
                postId={id}
                txId={transactionHash}
                onDelete={handleDeletePost}
            />
            <Box sx={{ mb: 2, mt: 1, ml: 6 }} >
                <Markdown
                    children={content}
                    htStyle={{ color: theme.palette.primary.main }}
                    mtStyle={{ color: theme.palette.error.main }}
                    urlStyle={{ color: theme.palette.secondary.main }}
                    onHashtagClick={handleHashTagClicked}
                />
                <PostActions
                    likes={likes}
                    votes={votes}
                    comments={commentsCount}
                    dislikes={0}
                    shared={0}
                />
            </Box>
            <Divider sx={{ my: 1 }} />
        </div>
    );
}   