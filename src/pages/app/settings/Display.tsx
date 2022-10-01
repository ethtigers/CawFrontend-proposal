import { Stack, Typography } from "@mui/material";

import Block from "src/components/Block";
import SettingColorPresets from "src/components/settings/SettingColorPresets";
import SettingDirection from "src/components/settings/SettingDirection";
import SettingFullscreen from "src/components/settings/SettingFullscreen";
import SettingMode from "src/components/settings/SettingMode";

export default function DisplaySettings() {

    return (
        <Block
            title="Display"
            subtitle="Customize the display of your account"
        >
            <Stack
                id="display-settings"
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-around"
                alignItems="baseline"
                spacing={5}
                sx={{ width: '100%' }}
            >
                <Stack spacing={1} sx={{ width: '-webkit-fill-available' }} >
                    <div>
                        <Typography variant="subtitle2">Mode</Typography>
                        <SettingMode />
                    </div>
                    <div>
                        <Typography variant="subtitle2">Direction</Typography>
                        <SettingDirection />
                    </div>
                </Stack>
                <Stack spacing={1} sx={{ width: '-webkit-fill-available' }} >
                    <div>
                        <Typography variant="subtitle2">Theme</Typography>
                        <SettingColorPresets />
                    </div>
                    <div>
                        <Typography variant="subtitle2">Layout</Typography>
                        <SettingFullscreen />
                    </div>
                </Stack>
            </Stack>
        </Block>
    );
}