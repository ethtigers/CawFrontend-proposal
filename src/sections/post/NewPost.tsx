import { Box, Button, Divider, IconButton, Stack, TextField, Tooltip } from "@mui/material";

import MyAvatar from 'src/components/avatar/MyAvatar';
import Iconify from 'src/components/Iconify';

export default function NewPost() {

    return (
        <Stack sx={{ m: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <MyAvatar />
                <TextField
                    value={'The next #censor would be whoever is looking at the text, seeing what words they would “trick out” to fit the political'}
                    fullWidth
                    multiline
                    rows={4}
                    maxRows={10}
                    placeholder="What's happening?"
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
                    title="Add a photo"
                >
                    <IconButton color="primary" aria-label="upload picture" >
                        {<Iconify icon={'akar-icons:image'} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Add an animated GIF">
                    <IconButton color="primary" aria-label="upload animated picture" >
                        {<Iconify icon={'material-symbols:gif-box-outline'} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Add a video">
                    <IconButton color="primary" aria-label="upload a video" >
                        {<Iconify icon={'bi:camera-video'} rotate={180} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Add a main link">
                    <IconButton color="primary" aria-label="add a main link" >
                        {<Iconify icon={'akar-icons:link-on'} rotate={180} width={20} height={20} />}
                    </IconButton>
                </Tooltip>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip
                    title="Post your message">
                    <Button variant="contained" color="primary" size="small" >CAW</Button>
                </Tooltip>
            </Stack>
            <br />
            <Divider />
        </Stack>
    );
}