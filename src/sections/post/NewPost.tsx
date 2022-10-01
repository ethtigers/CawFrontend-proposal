import { useEffect, useState } from "react";
import { Box, Button, Divider, IconButton, Stack, TextField, Tooltip, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import MyAvatar from 'src/components/avatar/MyAvatar';
import CircularProgressWithLabel from 'src/components/progress/CircularProgress';
import Iconify from 'src/components/Iconify';

export const MAX_CHARECTERS = 420;
const defaultText = 'The next #censor would be whoever is looking at the text, seeing what words they would “trick out” to fit the political';

export default function NewPost() {

    const { t } = useTranslation();
    const theme = useTheme();
    const [ characters, setCharacters ] = useState(defaultText.length);
    const [ progress, setProgress ] = useState(0);

    useEffect(() => {
        setProgress(characters >= MAX_CHARECTERS ? 100 : (characters / MAX_CHARECTERS) * 100);
    }, [ characters ]);

    const color = progress < 80 ? theme.palette.primary.main : progress < 96 ? theme.palette.error.darker : progress < 100 ? theme.palette.error.dark : theme.palette.error.main;

    return (
        <Stack sx={{ m: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <MyAvatar />
                <TextField
                    defaultValue={defaultText}
                    fullWidth
                    multiline
                    minRows={4}
                    maxRows={10}
                    placeholder={t('labels.new_post_plh')}
                    inputProps={{ maxLength: MAX_CHARECTERS }}
                    onChange={(e) => setCharacters(e.target.value.length)}
                    InputProps={{ endAdornment: <CircularProgressWithLabel sx={{ color }} value={progress} /> }}                    
                />
            </Stack>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{
                    ml: { xs: 0, sm: 7 },
                    mt: 1
                }}
            >
                <Tooltip
                    title={t('labels.add_photo')}
                >
                    <IconButton color="primary" aria-label={t('labels.add_photo')} >
                        {<Iconify icon={'akar-icons:image'} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title={t('labels.add_gif')}>
                    <IconButton color="primary" aria-label={t('labels.add_gif')} >
                        {<Iconify icon={'material-symbols:gif-box-outline'} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title={t('labels.add_video')}>
                    <IconButton color="primary" aria-label={t('labels.add_video')} >
                        {<Iconify icon={'bi:camera-video'} rotate={180} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title={t('labels.add_link')}>
                    <IconButton color="primary" aria-label={t('labels.add_link')} >
                        {<Iconify icon={'akar-icons:link-on'} rotate={180} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title={t('labels.add_long_caw')}>
                    <IconButton color="primary" aria-label={t('labels.add_long_caw')} >
                        {<Iconify icon={'ant-design:plus-circle-outlined'} rotate={180} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip
                    title={t('buttons.btn_caw_tooltip')}>
                    <Button variant="contained" color="primary" size="small" >CAW</Button>
                </Tooltip>                
            </Stack>
            <br />
            <Divider />
        </Stack>
    );
}