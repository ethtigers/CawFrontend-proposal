// i18n
import '../locales/i18n';

import 'simplebar/src/simplebar.css';
import 'react-image-lightbox/style.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// custom styles
import './styles.css';

import cookie from 'cookie';
import { ReactElement, ReactNode } from 'react';

// next
import { NextPage } from 'next';
import Head from 'next/head';
import App, { AppProps, AppContext } from 'next/app';


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// utils
import { getSettings } from '../utils/settings';
import { SettingsValueProps } from '../components/settings/type';

// contexts
import { SettingsProvider } from '../contexts/SettingsContext';
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';

// theme
import ThemeProvider from '../theme';

// components
import RtlLayout from '../layouts/RtlLayout';
import ProgressBar from '../components/ProgressBar';
import ThemeColorPresets from '../components/ThemeColorPresets';
import NotistackProvider from '../components/NotistackProvider';
import ThemeLocalization from '../components/ThemeLocalization';
import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import { AuthProvider } from '../contexts/AuthContext';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  settings: SettingsValueProps;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {

  const { Component, pageProps, settings } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CollapseDrawerProvider>
            <SettingsProvider defaultSettings={settings}>
              <ThemeProvider>
                <NotistackProvider>
                  <MotionLazyContainer>
                    <ThemeColorPresets>
                      <ThemeLocalization>
                        <RtlLayout>
                          <ProgressBar />
                          {getLayout(<Component {...pageProps} />)}
                        </RtlLayout>
                      </ThemeLocalization>
                    </ThemeColorPresets>
                  </MotionLazyContainer>
                </NotistackProvider>
              </ThemeProvider>
            </SettingsProvider>
          </CollapseDrawerProvider>
        </LocalizationProvider>
      </AuthProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {

  const appProps = await App.getInitialProps(context);
  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
