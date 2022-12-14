import { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { m } from 'framer-motion';

import { posts } from 'src/_mock/wallposts'
import { MotionContainer, varFade } from 'src/components/animate';
import NewPost from 'src/sections/post/NewPost';
import Post from 'src/sections/post';
import { PostDto } from 'src/types/community-feed';

export default function WallPost() {

    const { t } = useTranslation();
    //* Pagination rendering logic
    const [ data, setData ] = useState<PostDto[]>([]);
    const [ loading, setLoading ] = useState(true);

    useLayoutEffect(() => {

        //* Load posts from API

        setTimeout(() => {
            setData(posts);
            setLoading(false);
        }, 500);

    }, []);

    return (
        <MotionContainer>
            {loading && <div>{t('labels.loading')}</div>}
            {!loading && (
                <m.div variants={varFade().inDown}>
                    <Typography variant="h3" paragraph>
                        {t('app_home.wall_title')}
                    </Typography>
                    <NewPost />
                </m.div>
            )}
            {data.map((post) => (
                <m.div key={post.id} variants={varFade().inUp}>
                    <Post post={post} />
                </m.div>
            ))}
        </MotionContainer>
    );
}