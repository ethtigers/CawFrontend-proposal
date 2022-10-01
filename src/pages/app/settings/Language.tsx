import { Stack, Typography } from "@mui/material";

import Block from "src/components/Block";
import LanguagePopover from 'src/components/settings/LanguagePopover';

export default function LanguajeSettings() {

    return (
        <Block
            title="Language"
            subtitle="Languages you may know"
        >
            <Stack direction="row" alignItems="center" spacing={0}>
                <Typography variant="subtitle2">Select your preferred language</Typography>
                <LanguagePopover />
            </Stack>
        </Block>
    );
}