import { Grid, Typography, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { ContactBtn } from './ContactBtn';
import { useTheme } from '@emotion/react';

// eslint-disable-next-line react/prop-types
export const TitleHeader = ({ title, subTitle }) => {
  let location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid>
      <Typography variant={isMobile ? 'h2' : 'h1'} sx={{ mt: 30 }}>
        {title}
      </Typography>
      <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ mt: 3 }}>
        {subTitle}
      </Typography>

      {location.pathname !== '/contact' && (
        <Grid item xs={9.5} sx={{ my: 10 }}>
          <Link to={`/contact`}>
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
      )}
    </Grid>
  );
};
