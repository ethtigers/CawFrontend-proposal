import { Box, Button, Divider, IconButton, Stack, TextField, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

import MyAvatar from 'src/components/avatar/MyAvatar';
import Iconify from 'src/components/Iconify';

export default function NewPost() {

    const { t } = useTranslation();
    return (
        <Stack sx={{ m: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <MyAvatar />
                <TextField
                    defaultValue={'The next #censor would be whoever is looking at the text, seeing what words they would “trick out” to fit the political'}
                    fullWidth
                    multiline
                    rows={4}
                    maxRows={10}
                    placeholder={t('labels.new_post_plh')}
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