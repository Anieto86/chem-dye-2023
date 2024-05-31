import { Box, Grid, Typography } from '@mui/material';
import logo from '../../../assets/img/ColourLogo.png';
import { LinkIcons } from '../LinkIcons';

export const Footer = () => {
  return (
    <Grid container padding={6}>
      <Grid container direction="row" alignItems="center" xs={4}>
        <Grid item>
          <img src={logo} alt="Logo footer" />
        </Grid>{' '}
        <Grid item>
          <Typography>ChemDye</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        xs={8}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <LinkIcons />
        </Grid>
      </Grid>

      <Grid container s>
        <Grid item xs={5} mb={3}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam at
            perspiciatis a mollitia excepturi qui iusto odio, maiores magnam,
            quam quaerat accusantium, atque aspernatur perferendis. Optio, id!
            Sit, modi quam!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        columns
      >
        <Grid item>
          <Typography variant="h5">About ChemDye studio</Typography>
          <Typography>Meet the team</Typography>
          <Typography>Explore our work</Typography>
          <Typography>What we do</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Site information & Policies</Typography>
          <Typography>About this website</Typography>
          <Typography>Privacy Policy</Typography>
          <Typography>Cookies</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Get in Touch</Typography>
          <Typography>si.chemdye@gmail.com</Typography>
          <Typography>xxxxxxxxxxxxx</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{ width: '100%', height: 1.5, backgroundColor: '#000000', my: 2 }}
      ></Box>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Typography>c 2024, All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
