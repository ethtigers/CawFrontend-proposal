import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';
import DisplaySettings from './Display';
import LanguajeSettings from './Language';

SettingsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function SettingsPage() {
    const { t } = useTranslation();
    return (
        <PageWrapper title={t('settings.title')}>
            <Stack spacing={2}>
                <Typography variant="h3" paragraph>
                    {t('settings.title')}
                </Typography>
                <DisplaySettings />
                <LanguajeSettings />
            </Stack>
        </PageWrapper >
    );
}