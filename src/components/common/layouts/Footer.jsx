import { Box, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
        mt: 20,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 5,
        }}
      >
        <Link to={`https://www.instagram.com/chemdye_si/?hl=es`}>
          <IconButton
            sx={{
              color: 'black',
              fontSize: 30,
            }}
          >
            <InstagramIcon sx={{ fontSize: '1.5em' }} />
          </IconButton>
        </Link>
        <Link to={`https://www.linkedin.com/in/mariana-oksdath-mansilla`}>
          <IconButton
            sx={{
              color: 'black',
              mx: 2,
              fontSize: 30,
            }}
          >
            <LinkedInIcon sx={{ fontSize: '1.5em' }} />
          </IconButton>
        </Link>

        <Link
          to={`https://twitter.com/i/flow/login?redirect_after_login=%2FMari_SciArt`}
        >
          <IconButton
            sx={{
              color: 'black',
              fontSize: 30,
            }}
          >
            <TwitterIcon sx={{ fontSize: '1.5em' }} />
          </IconButton>
        </Link>
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
          <Typography align="left" sx={{ fontSize: 15 }}>
            Terms of use / Cookie Policy / Privacy Policy
          </Typography>
          <Grid item sx={{ my: 3 }}>
            <Typography align="left" sx={{ fontSize: 15 }}>
              ChemDye Scientific Illustrations
            </Typography>
            <Typography align="left" sx={{ fontSize: 15 }}>
              ABN 45 841 581 765
            </Typography>
            <Typography align="left" sx={{ fontSize: 15 }}>
              Adelaide - Australia
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography
            align="right"
            sx={{ fontSize: 15, p: 2, lineHeight: '1.2' }}
          >
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
