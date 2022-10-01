import { Icon, IconifyIcon } from '@iconify/react';
import { Box, BoxProps, SxProps } from '@mui/material';

interface Props extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon | string;
  rotate?: number;
}

export default function Iconify({ icon, sx, rotate = 180, ...other }: Props) {
  return <Box component={Icon} icon={icon} rotate={rotate} sx={{ ...sx }} {...other} />;
}
