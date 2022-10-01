import { Grid, RadioGroup } from '@mui/material';

import Iconify from 'src/components/Iconify';
import useSettings from 'src/hooks/useSettings';
import { BoxMask, BoxStyle } from "./BoxMask";


export default function SettingDirection() {

  const { themeDirection, onChangeDirection } = useSettings();

  return (
    <RadioGroup name="themeDirection" value={themeDirection} onChange={onChangeDirection}>
      <Grid dir="ltr" container spacing={2.5}>
        {[ 'ltr', 'rtl' ].map((direction, index) => {
          const isSelected = themeDirection === direction;

          return (
            <Grid key={direction} item xs={6}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    color: 'primary.main',
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                }}
              >
                <Iconify
                  icon={index === 0 ? 'ph:align-left-duotone' : 'ph:align-right-duotone'}
                  width={28}
                  height={28}
                />
                <BoxMask value={direction} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
