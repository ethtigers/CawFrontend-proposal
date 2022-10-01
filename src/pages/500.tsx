import { m } from 'framer-motion';
import NextLink from 'next/link';
import { useTranslation } from "react-i18next";
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';

import Layout from 'src/layouts';
import Page from 'src/components/wrappers/Page';
import { MotionContainer, varBounce } from 'src/components/animate';
import { SeverErrorIllustration } from 'src/assets';

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10),
}));


Page500.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

export default function Page500() {
  const { t } = useTranslation();
  return (
    <Page title={t('500.title')} sx={{ height: 1 }}>
      <RootStyle>
        <Container component={MotionContainer}>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                {t('500.title')}
              </Typography>
            </m.div>
            <Typography sx={{ color: 'text.secondary' }}>
              {t('500.description')}
            </Typography>
            <m.div variants={varBounce().in}>
              <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
            </m.div>
            <NextLink href="/">
              <Button size="large" variant="contained">
                {t('buttons.go_home')}
              </Button>
            </NextLink>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
