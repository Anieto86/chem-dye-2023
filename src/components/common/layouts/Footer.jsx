import { Box, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ContactBtn } from '../ContactBtn';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Box
      sx={{
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        backgroundColor: '#F6F7F9',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
      >
        <ContactBtn title="Contact Us" />
      </Link>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          sx={{
            color: 'black',
            fontSize: 50,
          }}
        >
          <InstagramIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
        <IconButton
          sx={{
            color: 'black',
            mx: 2,
            fontSize: 50,
          }}
        >
          <LinkedInIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
        <IconButton
          sx={{
            color: 'black',
            fontSize: 50,
          }}
        >
          <TwitterIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          width: '100%',
          height: 2,
          backgroundColor: '#ff6f80',
          marginTop: 2,
        }}
      ></Box>

      <Grid container spacing={2} columns={16} sx={{ p: 2 }}>
        <Grid item xs={10}>
          <Typography align="left" sx={{ fontSize: 25 }}>
            Terms of use / Cookie Policy / Privacy Policy
          </Typography>
          <Grid item sx={{ my: 3 }}>
            <Typography align="left" sx={{ fontSize: 25 }}>
              ChemDye Scientific Illustrations
            </Typography>
            <Typography align="left" sx={{ fontSize: 25 }}>
              ABN 45 841 581 765
            </Typography>
            <Typography align="left" sx={{ fontSize: 25 }}>
              Adelaide - Australia
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" sx={{ fontSize: 25, p: 2 }}>
            Unauthorized Reproduction Prohibited: Any replication, utilization,
            or incorporation of materials including images, diagrams, sounds, or
            text from this website in electronic or printed publications without
            prior written consent is strictly prohibited.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
