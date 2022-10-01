import { Grid, InputAdornment } from '@mui/material';

import PageWrapper, { Layout } from "src/components/wrappers/PageWrapper";
import Iconify from 'src/components/Iconify';
import Scrollbar from "src/components/Scrollbar";
import InputStyle from 'src/components/InputStyle';
import Hidden from 'src/components/Hidden';
import WallPost from 'src/sections/wall';

FeedPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

function SearchInput() {

  return (
    <InputStyle
      fullWidth
      stretchStart={200}
      stretchAdd={20}
      placeholder="Search caw"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <Iconify
              icon={'eva:search-fill'}
              sx={{ color: 'text.disabled', width: 20, height: 20 }}
            />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          color: 'common.white',
          width: '100%',
        },
      }}
    />
  );
}

export default function FeedPage() {

  return (
    <PageWrapper title="Community Feed">
      <Grid container spacing={3}>
        <Hidden width="mdUp">
          <Grid item xs={12}>
            <SearchInput />
          </Grid>
        </Hidden>

        <Grid item xs={12} md={10}>
          <Scrollbar>
            <WallPost />
          </Scrollbar>
        </Grid>

        <Hidden width="mdDown">
          <Grid item md={2}>
            <SearchInput />
          </Grid>
        </Hidden>
      </Grid>
    </PageWrapper>
  );
}
