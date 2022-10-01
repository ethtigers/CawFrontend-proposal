import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { defaultSettings, cookiesKey } from 'src/config';

export const getSettings = (cookies: NextApiRequestCookies) => {
  const themeMode = getData(cookies[ cookiesKey.themeMode ]) || defaultSettings.themeMode;

  const themeDirection =
    getData(cookies[ cookiesKey.themeDirection ]) || defaultSettings.themeDirection;

  const themeColorPresets =
    getData(cookies[ cookiesKey.themeColorPresets ]) || defaultSettings.themeColorPresets;

  const themeLayout = getData(cookies[ cookiesKey.themeLayout ]) || defaultSettings.themeLayout;

  return {
    themeMode,
    themeDirection,
    themeColorPresets,
    themeLayout
  };
};

const getData = (value?: string) => {
  if (value === 'true' || value === 'false') {
    return JSON.parse(value);
  }
  if (value === 'undefined' || !value) {
    return '';
  }
  return value;
};
