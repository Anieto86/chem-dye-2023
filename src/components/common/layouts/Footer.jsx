import { Box, Grid, Typography } from '@mui/material';
import logo from '../../../assets/img/ColourLogo.png';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { LinkIcons } from '../LinkIcons';
import { Link } from 'react-router-dom';

const links = [
  { to: '/crew', text: 'Meet the team' },
  { to: '/work', text: 'Explore our work' },
  { to: '/services', text: 'What we do' },
];

const linksPolicies = [
  { to: '/policies/website', text: 'About this website' },
  { to: '/policies/privacy', text: 'Privacy Policy' },
  { to: '/policies/cookies', text: 'Cookies' },
];

export const Footer = () => {
  return (
    <Grid container padding={6} mt={60}>
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
          <Typography variant="h6">
            We excel in crafting compelling scientific content to communicate
            your research and discoveries effectively
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" sx={{ my: 3 }}>
            About ChemDye studio
          </Typography>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              <Typography sx={{ my: 3 }} variant="h6">
                {link.text}
              </Typography>
            </Link>
          ))}
        </Grid>

        <Grid item>
          <Typography variant="h4" sx={{ my: 3 }}>
            Site information & Policies
          </Typography>
          {linksPolicies.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={{ textDecoration: 'none', color: '#000000' }}
            >
              <Typography sx={{ my: 3 }} variant="h6">
                {link.text}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Grid item>
          <Typography variant="h4">Get in Touch</Typography>
          <Typography sx={{ mb: 3 }} variant="h6">
            si.chemdye@gmail.com
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>Adelaide</Typography>
          <Typography variant="h6">Goodwood, 5034</Typography>{' '}
          <Typography variant="h6">Australia, Adelaide</Typography>
          <Typography variant="h6">ABN 45 841 581 765</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{ width: '100%', height: 1.2, backgroundColor: '#000000', mt: 6 }}
      ></Box>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item mt={2}>
          <CopyrightIcon />
        </Grid>
        <Grid item mt={2}>
          <Typography variant="h6">2024, All Rights Reserved</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
