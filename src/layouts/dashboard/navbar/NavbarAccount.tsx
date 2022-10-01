import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';

import { PATH_DASHBOARD } from 'src/routes/paths';
import Avatar from 'src/components/avatar/Avatar';
import useAuth from "src/hooks/useAuth";
import { shortenAddress } from "src/utils/helper";


const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[ 500_12 ],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));


type Props = {
  isCollapse: boolean | undefined;
};


export default function NavbarAccount({ isCollapse }: Props) {

  const { user } = useAuth();
  const path = PATH_DASHBOARD.user.profile.replace(':username', user?.username || '');

  return (
    <NextLink href={path} passHref>
      <Link underline="none" color="inherit">
        <RootStyle
          sx={{
            margin: 2,
            ...(isCollapse && {
              bgcolor: 'transparent',
            }),
          }}
        >
          <Avatar src={user?.avatar?.src || ''} />
          <Box
            sx={{
              ml: 2,
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.shorter,
                }),
              ...(isCollapse && {
                ml: 0,
                width: 0,
              }),
            }}
          >
            <Typography variant="subtitle2" noWrap>
              {user?.username || ''}
            </Typography>
            <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
              {user?.wallet ? shortenAddress(user.wallet) : '0x0...0x0'}
            </Typography>
          </Box>
        </RootStyle>
      </Link>
    </NextLink>
  );
}
