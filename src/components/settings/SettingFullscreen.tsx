import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { alpha } from '@mui/material/styles';
import { Button } from '@mui/material';

import Iconify from 'src/components/Iconify';

export default function SettingFullscreen() {

  const { t } = useTranslation();
  const [ fullscreen, setFullscreen ] = useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <Button
      size="large"
      variant="outlined"
      color={fullscreen ? 'primary' : 'inherit'}
      startIcon={<Iconify icon={fullscreen ? 'ic:round-fullscreen-exit' : 'ic:round-fullscreen'} />}
      onClick={toggleFullScreen}
      sx={{
        fontSize: 14,
        height: 72,
        width: '-webkit-fill-available',
        ...(fullscreen && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        }),
      }}
    >
      {fullscreen ? t('labels.exit_fullscreen') : t('labels.fullscreen')}
    </Button>
  );
}
