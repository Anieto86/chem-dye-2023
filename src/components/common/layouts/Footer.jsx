import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#F6F7F9',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          marginBottom: 2,
        }}
      >
        Contact Us
      </Button>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconButton
          sx={{
            color: 'black',
          }}
        >
          <InstagramIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
        <IconButton
          sx={{
            color: 'black',
            mx: 2,
          }}
        >
          <LinkedInIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
        <IconButton
          sx={{
            color: 'black',
          }}
        >
          <TwitterIcon sx={{ fontSize: '1.5em' }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 2,
          backgroundColor: 'pink',
          marginTop: 2,
        }}
      ></Box>
      <Grid container spacing={2} columns={16} sx={{ p: 2 }}>
        <Grid item xs={10}>
          <Typography align="left">
            Terms of use / Cookie Policy / Privacy Policy
          </Typography>
          <Grid item sx={{ my: 3 }}>
            <Typography align="left">
              ChemDye Scientific Illustrations
            </Typography>
            <Typography align="left">ABN 45 841 581 765</Typography>
            <Typography align="left">Adelaide - Australia</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
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
