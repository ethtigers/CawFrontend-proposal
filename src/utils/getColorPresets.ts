import palette from 'src/theme/palette';
import { ThemeColorPresets } from 'src/components/settings/type';

export const colorPresets = [
  // DEFAULT
  {
    name: 'default',
    enabled: false,
    ...palette.light.warning,
  },
  // PURPLE
  {
    name: 'purple',
    enabled: false,
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff',
  },
  // CYAN
  {
    name: 'cyan',
    enabled: false,
    lighter: '#D1FFFC',
    light: '#76F2FF',
    main: '#1CCAFF',
    dark: '#0E77B7',
    darker: '#053D7A',
    contrastText: palette.light.grey[ 800 ],
  },
  // BLUE
  {
    name: 'blue',
    enabled: true,
    lighter: '#D1E9FC',
    light: '#76B0F1',
    main: '#2065D1',
    dark: '#103996',
    darker: '#061B64',
    contrastText: '#fff',
  },
  // ORANGE
  {
    name: 'orange',
    enabled: true,
    lighter: '#FEF4D4',
    light: '#FED680',
    // main: '#fda92d',
    main: '#f7c034',
    dark: '#B66816',
    darker: '#793908',
    contrastText: palette.light.grey[ 800 ],
  },
  {
    name: 'red',
    enabled: false,
    lighter: '#FFE3D5',
    light: '#FFC1AC',
    main: '#FF3030',
    dark: '#B71833',
    darker: '#7A0930',
    contrastText: '#fff',
  },
];

export const defaultPreset = colorPresets[ 0 ];
export const purplePreset = colorPresets[ 1 ];
export const cyanPreset = colorPresets[ 2 ];
export const bluePreset = colorPresets[ 3 ];
export const orangePreset = colorPresets[ 4 ];
export const redPreset = colorPresets[ 5 ];

export default function getColorPresets(presetsKey: ThemeColorPresets) {
  return {
    purple: purplePreset,
    cyan: cyanPreset,
    blue: bluePreset,
    orange: orangePreset,
    red: redPreset,
    default: defaultPreset,
  }[ presetsKey ];
}
