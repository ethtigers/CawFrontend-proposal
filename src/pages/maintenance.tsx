import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { Button, Typography, Container } from '@mui/material';

import Layout from 'src/layouts';
import Page from 'src/components/wrappers/Page';
import { MaintenanceIllustration } from 'src/assets';

const RootStyle = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


Maintenance.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="logoOnly">{page}</Layout>;
};


export default function Maintenance() {
  const { t } = useTranslation();
  return (
    <Page title={t('maintenance.title')} sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            {t('maintenance.title')}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {t('maintenance.description')}
          </Typography>
          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />
          <NextLink href="/">
            <Button size="large" variant="contained">
              {t('buttons.go_home')}
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </Page>
  );
}
