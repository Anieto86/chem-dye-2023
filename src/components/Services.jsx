import { Button, Grid, Typography } from '@mui/material';

export const Services = () => {
  return (
    <Grid container spacing={2} columns={16}>
      <Grid item xs={16}>
        <h2>OUR SERVICES</h2>
      </Grid>
      <Grid item xs={6}>
        image
      </Grid>
      <Grid item xs={8}>
        <Typography>
          Our speciality is creating medical content for a wide variety of
          packages. As key stakeholders of the project, our number one priority
          is to work closely with you to create your science story
        </Typography>
      </Grid>

      <Grid item xs={16}>
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
      </Grid>
      <Grid item xs={16}>
        <h2>WHY US?</h2>
      </Grid>
      <Grid item xs={6}>
        image
      </Grid>
      <Grid item xs={8}>
        <Typography>
          As scientists turned artists, we bring a unique blend of expertise and
          years of experience serving academia, biotech, and the health
          industry. Collaborating closely with you, we apply critical thinking
          and creativity to tackle your communication challenges.
        </Typography>
      </Grid>
      <Grid item xs={16}>
        <h2>WHO WE’VE WORK WITH?</h2>
      </Grid>
    </Grid>
  );
};
