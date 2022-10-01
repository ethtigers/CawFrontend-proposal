import { alpha } from '@mui/material/styles';
import { Box, Grid, RadioGroup } from '@mui/material';

import useSettings from 'src/hooks/useSettings';
import { BoxMask, BoxStyle } from "./BoxMask";

export default function SettingColorPresets() {

  const { themeColorPresets, onChangeColor, colorOption } = useSettings();

  return (
    <RadioGroup name="themeColorPresets" value={themeColorPresets} onChange={onChangeColor}>
      <Grid dir="ltr" container spacing={1.5}>
        {colorOption.map((color) => {
          const colorName = color.name;
          const colorValue = color.value;
          const isSelected = themeColorPresets === colorName;

          return (
            <Grid key={colorName} item xs={6}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    bgcolor: alpha(colorValue, 0.08),
                    border: `solid 2px ${colorValue}`,
                    boxShadow: `inset 0 4px 8px 0 ${alpha(colorValue, 0.24)}`,
                  }),
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: colorValue,
                    transform: 'rotate(-45deg)',
                    transition: (theme) =>
                      theme.transitions.create('all', {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                      }),
                    ...(isSelected && { transform: 'none' }),
                  }}
                />

                <BoxMask value={colorName} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
