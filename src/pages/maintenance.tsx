import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
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
  return (
    <Page title="Maintenance" sx={{ height: 1 }}>
      <RootStyle>
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            Website currently under maintenance
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            We are currently working hard on this page!
          </Typography>
          <MaintenanceIllustration sx={{ my: 10, height: 240 }} />
          <NextLink href="/">
            <Button size="large" variant="contained">
              Go Home
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </Page>
  );
}
