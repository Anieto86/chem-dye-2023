import { Grid, Typography } from '@mui/material';
import { ContactBtn } from './common/ContactBtn';
import aboutImg from '../assets/img/MyPicProfile_V2.png';

export const About = () => {
  return (
    <Grid container spacing={3}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography variant="h2" fontWeight={600}>
            Mariana Oksdath
            <br />
            <span style={{ color: '#DF367C' }}>visual science</span>
          </Typography>
          <Typography variant="h2" fontWeight={600}>
            communicator
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <img
            src={aboutImg}
            alt="Image 1"
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Typography>
          Welcome to ChemDye Scientific Illustrations, a studio dedicated to
          visual science communication, where art and science merge seamlessly.
          I’m Mariana Oksdath, the creator behind ChemDye. With over a decade of
          experience as a researcher in academia and the privilege of working
          with prestigious names like Greenpeace in design, I have found my
          passion in creating visuals that revolutionise how we perceive
          science.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          I firmly believe in the power of visuals to convey complex scientific
          concepts, and that belief drives my mission. I am driven by the desire
          to make visual science communication more widely recognised and
          appreciated. I am methodical in my approach, constantly seeking
          inspiration from my colleagues and surroundings and infusing my love
          for art into every project.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Collaborating with scientists who have captivating stories to tell is
          my true calling. I excel at conceptualising ideas and transforming
          them into memorable images that leave a lasting impact. Colours,
          typography, design, light, and shadows constantly occupy my thoughts,
          as I believe I was born to fulfil this artistic role.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Join me at ChemDye as we embark on a journey to reshape how science is
          communicated. Together, we can bring science to life through
          captivating visuals that ignite curiosity, spark
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <ContactBtn title="Connect with us" />
      </Grid>
    </Grid>
  );
};
