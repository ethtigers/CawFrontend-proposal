import { m } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';

import Iconify from 'src/components/Iconify';
import { MotionViewport, varFade } from 'src/components/animate';

const CARDS = [
  {
    icon: 'eos-icons:blockchain',
    title: 'home.blockchain_title',
    description: 'home.blockchain_label',
  },
  {
    icon: 'tabler:currency-ethereum',
    title: 'home.ethereum_title',
    description: 'home.ethereum_label',
  },
  {
    icon: 'fluent:people-community-16-filled',
    title: 'home.community_title',
    description: 'home.community_label',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [ theme.breakpoints.up('md') ]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity: number) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[ 500 ], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    [ theme.breakpoints.up('md') ]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[ theme.palette.mode === 'light' ? 200 : 800 ],
    },
    '&.cardLeft': {
      [ theme.breakpoints.up('md') ]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [ theme.breakpoints.up('md') ]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});


export default function PoweredSection() {

  const theme = useTheme();
  const { t } = useTranslation();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 25 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ mb: 2, color: 'text.disabled' }}>
              {t('home.caw_is')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h3">
              {t('home.censorship_title')}
            </Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle
                className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}
              >
                {<Iconify icon={card.icon} width={40} height={40} sx={{ mb: 10, }} />}
                <Typography variant="h5" paragraph>
                  {t(card.title)}
                </Typography>
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                  {t(card.description)}
                </Typography>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
