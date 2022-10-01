import { useTranslation } from 'react-i18next';
import { enUS, deDE, esES } from '@mui/material/locale';

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/icons/ic_flag_en.svg',
  },
  {
    label: 'Español',
    value: 'es',
    systemValue: esES,
    icon: '/icons/ic_flag_es.svg',
  },
  {
    label: 'Deutsch',
    value: 'de',
    systemValue: deDE,
    icon: '/icons/ic_flag_de.svg',
  },
];

export default function useLocales() {

  const { i18n, t: translate } = useTranslation();
  const langStorage = (typeof window !== 'undefined') ? localStorage.getItem('i18nextLng') : 'en';
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[ 0 ];

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
