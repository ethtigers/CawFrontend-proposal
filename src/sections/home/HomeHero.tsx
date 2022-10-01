import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { m, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack, StackProps } from '@mui/material';

import Iconify from 'src/components/Iconify';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { MotionContainer, varFade } from 'src/components/animate';

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[ 800 ],
  [ theme.breakpoints.up('md') ]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props: StackProps) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    position: 'relative',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [ theme.breakpoints.up('md') ]: {
      margin: 'unset',
      textAlign: 'left',
    },
  })
);


const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [ theme.breakpoints.up('lg') ]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

const DecentralizedTextStyle = styled(m.span)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.darker}  13%, ${theme.palette.primary.main}  100%)`,
  '-webkit-text-fill-color': 'transparent',
  '-webkit-background-clip': 'text'
}));


const items = [
  {
    id: 0,
    content: "BY",
  },
  {
    id: 1,
    content: "FOR",
  },
];

function FlippingText() {

  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Typography variant="h4" sx={{ color: 'common.white' }}>
        <div style={{ position: 'relative', display: 'flex', gap: 10 }} >
          <AnimatePresence>
            <span>BUILT</span>
            <m.div
              key={items[ index ].id}
              initial={{ x: 80, y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ x: 80, y: -20, opacity: 0 }}
              transition={{ ease: "easeInOut" }}
              style={{ position: "absolute" }}
            >
              {`${items[ index ].content}`}
            </m.div>
          </AnimatePresence>
          <span style={{ paddingLeft: 60 }}>TEH PPL</span>
        </div>
      </Typography>
    </>
  );
}

export default function HomeHero() {
  const { t } = useTranslation();
  return (
    <MotionContainer id="hero-home" >
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="assets/images/overlay.svg"
          variants={varFade().in}
        />

        <HeroImgStyle
          alt="hero"
          src="assets/images/cawnet.png"
          variants={varFade().inUp}
        />
        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                TEH <DecentralizedTextStyle>DECENTRALIZED</DecentralizedTextStyle> SOCIAL
              </Typography>
            </m.div>
            <FlippingText />
            <m.div variants={varFade().inRight}>
              <NextLink href={PATH_DASHBOARD.root} passHref>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                >
                  {t('verbs.explore')}
                </Button>
              </NextLink>
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
