import { Box, Grid, Typography } from '@mui/material';
import backgroundImg from '../assets/img/01.BG-IMAGE.jpg';

export const Home = () => {
  return (
    <Grid container>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <img
          src={backgroundImg}
          alt="Image"
          style={{ width: '100%', height: 'auto', transform: 'rotate(90deg)' }}
        />
        <Typography
          variant="body1"
          color="initial"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            maxWidth: '80%',
          }}
        >
          Transforming Complex Science into Compelling
          <span style={{ color: '#ff6f80' }}>
            {' '}
            Visual Experiences: Scientific Illustration, Animation, and 3D
            Solutions{' '}
          </span>
          for the Healthcare, Pharma, and Biotech Industries
        </Typography>
      </Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontSize: 40, textAlign: 'center', mx: 20 }}
      >
        We excel in crafting compelling scientific content to communicate your
        research and discoveries effectively. As your trusted partner, our top
        priority is collaborating closely with you, ensuring we create visuals
        that beautifully illustrate your science story. Together, let’s bring
        your vision to fruition and make a lasting impact in the world of
        science.
      </Typography>
    </Grid>
  );
};
