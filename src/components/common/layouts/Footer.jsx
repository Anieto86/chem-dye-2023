import { Box, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/ColourLogo.png';

export const Footer = () => {
  return (
    <Grid container padding={6}>
      <Grid
        container
        direction="row"
        alignItems="center"
        xs={4}
        sx={{ border: '1px solid green' }}
      >
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
        sx={{ border: '1px solid green' }}
      >
        <Grid item>
          <Link to={`https://www.instagram.com/chemdye_si/?hl=es`}>
            <IconButton
              sx={{
                color: '#DF367B',
                background: 'rgb(226, 139, 174)',
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link to={`https://www.linkedin.com/in/mariana-oksdath-mansilla`}>
            <IconButton
              sx={{
                color: '#DF367B',
                background: 'rgb(226, 139, 174)',
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link
            to={`https://twitter.com/i/flow/login?redirect_after_login=%2FMari_SciArt`}
          >
            <IconButton
              sx={{
                color: '#DF367B',
                background: 'rgb(226, 139, 174)',
              }}
            >
              <XIcon />
            </IconButton>
          </Link>
        </Grid>
      </Grid>

      <Grid container sx={{ border: '1px solid blue' }} s>
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
        sx={{ border: '1px solid blue' }}
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
