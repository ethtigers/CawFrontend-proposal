import { Stack, Typography } from "@mui/material";

import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';
import DisplaySettings from './Display';
import LanguajeSettings from './Language';

SettingsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function SettingsPage() {
    return (
        <PageWrapper title="Settings">
            <Stack spacing={2}>
                <Typography variant="h3" paragraph>
                    Settings
                </Typography>
                <DisplaySettings />
                <LanguajeSettings />
            </Stack>
        </PageWrapper >
    );
}