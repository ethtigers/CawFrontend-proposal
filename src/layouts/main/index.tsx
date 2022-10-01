import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Stack } from '@mui/material';

import Logo from 'src/components/Logo';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter'


type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {

  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1, mt: 10 }}>
      <MainHeader />
      {children}
      <Box sx={{ flexGrow: 1 }} />
      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Logo sx={{ mb: 1, mx: 'auto' }} />
          </Container>
        </Box>
      )}
    </Stack>
  );
}
