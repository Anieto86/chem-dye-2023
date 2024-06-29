import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Grid } from '@mui/material';
import { ScrollToTop } from '../../common/Hook/scrollTop';

export const CenteredLayout = () => {
  return (
    <>
      <NavBar />
      <Grid container justifyContent="center">
        <Grid item xs={10}>
          <ScrollToTop />
          <Outlet />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
