import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContactBtn } from './ContactBtn';

// eslint-disable-next-line react/prop-types
export const TitleHeader = ({ title, subTitle }) => {
  return (
    <>
      <Typography variant="h1" sx={{ mt: 30 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ mt: 3 }}>
        {subTitle}
      </Typography>
      <Grid item xs={9.5} sx={{ my: 10 }}>
        <Link to={`/contact`}>
          <ContactBtn title="Connect with us" />
        </Link>
      </Grid>
    </>
  );
};
