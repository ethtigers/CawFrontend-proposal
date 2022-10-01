import { styled, useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { Box, Button, AppBar, Toolbar, Container, Tooltip } from '@mui/material';

import Logo from 'src/components/Logo';
import LanguagePopover from "src/components/settings/LanguagePopover";
import { PATH_AUTH } from 'src/routes/paths'
import useOffSetTop from 'src/hooks/useOffSetTop';
import cssStyles from 'src/utils/cssStyles';
import { HEADER } from 'src/config';

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create([ 'height', 'background-color' ], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [ theme.breakpoints.up('md') ]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));


export default function MainHeader() {

  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            ...cssStyles(theme).bgBlur(),
            height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
          }),
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: theme.spacing(2),
          }}
        >
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip
            title={t('home.btn_mint_tooltip')}
          >
            <Button
              variant="contained"
              sx={{ textTransform: 'none' }}
              href={PATH_AUTH.register}
              target="_blank"
              rel="noopener"
            >
              {t('home.btn_mint')}
            </Button>
          </Tooltip>
          <LanguagePopover />
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
