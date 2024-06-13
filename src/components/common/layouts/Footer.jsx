import { Box, Grid, Typography } from '@mui/material';
import logo from '../../../assets/img/ColourLogo.png';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { LinkIcons } from '../LinkIcons';

export const Footer = () => {
  return (
    <Grid container padding={6}>
      <Grid container direction="row" alignItems="center" spacing={2}>
        <Grid item>
          <img src={logo} alt="Logo footer" />
        </Grid>{' '}
        <Grid item>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 600,
              fontFamily: 'Alegreya, serif',
            }}
          >
            ChemDye
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <LinkIcons />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={3} mb={3}>
          <Typography>
            We excel in crafting compelling scientific content to communicate
            your research and discoveries effectively
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h5" sx={{ my: 3 }}>
            About ChemDye studio
          </Typography>
          <Typography sx={{ my: 3 }}>Meet the team</Typography>
          <Typography sx={{ my: 3 }}>Explore our work</Typography>
          <Typography sx={{ my: 3 }}>What we do</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ my: 3 }}>
            Site information & Policies
          </Typography>
          <Typography sx={{ my: 3 }}>About this website</Typography>
          <Typography sx={{ my: 3 }}>Privacy Policy</Typography>
          <Typography>Cookies</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Get in Touch</Typography>
          <Typography sx={{ mb: 3 }}>si.chemdye@gmail.com</Typography>
          <Typography sx={{ fontWeight: 600 }}>Adelaide</Typography>
          <Typography>47 Devon Street South</Typography>
          <Typography>Goodwood, 5034</Typography>{' '}
          <Typography>Australia</Typography>
          <Typography>ABN 45 841 581 765</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{ width: '100%', height: 1.2, backgroundColor: '#000000', mt: 6 }}
      ></Box>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <CopyrightIcon />
        </Grid>
        <Grid item>
          <Typography>2024, All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
