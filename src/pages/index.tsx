import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import Layout from 'src/layouts';
import Page from 'src/components/wrappers/Page';
import { HomeHero, PoweredSection, EconomySection } from 'src/sections/home';

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));


HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout variant="main">{page}</Layout>;
};


export default function HomePage() {

  const { t } = useTranslation();

  return (
    <Page title={t('home.page_title')}>
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <PoweredSection />
          <EconomySection />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
