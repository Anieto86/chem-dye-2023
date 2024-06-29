import { Divider, Grid, Typography } from '@mui/material';
import { ContactBtn } from './common/ContactBtn';
import aboutImg from '../assets/img/MyPicProfile_V2.png';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ mb: 10, mt: -15 }}
      >
        <Grid item xs={4}>
          <Typography variant="h2" fontWeight={600}>
            Mariana Oksdath
            <br />
            <span style={{ color: '#DF367C' }}>visual science</span>
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            sx={{ fontSize: 60, mb: 2 }}
          >
            communicator
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            src={aboutImg}
            alt="Image 1"
            style={{ width: '80%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ mb: 30 }}
      >
        <Grid item xs={8}>
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{ fontSize: 40, textAlign: 'center' }}
          >
            Welcome to
            <span style={{ color: '#DF367C' }}>
              {' '}
              ChemDye Scientific Illustrations,{' '}
            </span>
            a studio dedicated to{' '}
            <span style={{ color: '#DF367C' }}>
              {' '}
              visual science communication,{' '}
            </span>
            where art and science merge seamlessly.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider
            sx={{
              my: 9,
              backgroundColor: '#ff6f80',
            }}
          />
        </Grid>

        <Grid item xs={10}>
          <Typography sx={{ fontSize: 30 }}>
            I’m <span style={{ fontWeight: 600 }}> Mariana Oksdath</span>, the
            creator behind ChemDye. With over a decade of experience as a
            researcher in academia and the privilege of working with prestigious
            names like Greenpeace in design, I have found my passion in creating
            visuals that revolutionise how we perceive science.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography sx={{ fontSize: 30 }}>
            I firmly believe in the power of visuals to convey complex
            scientific concepts, and that belief drives my mission. I am driven
            by the desire to make visual science communication more widely
            recognised and appreciated. I am methodical in my approach,
            constantly seeking inspiration from my colleagues and surroundings
            and infusing my love for art into every project.
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Divider
            sx={{
              my: 9,
              backgroundColor: '#ff6f80',
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
            variant="body1"
            fontWeight={600}
            sx={{ fontSize: 40, textAlign: 'center' }}
          >
            Join me at ChemDye as we embark on a journey to
            <span style={{ color: '#DF367C' }}>
              {' '}
              reshape how science is communicated.{' '}
            </span>
            Together, we can bring science to life through captivating visuals
            that ignite curiosity, spark imagination, and
            <span style={{ color: '#DF367C' }}>
              {' '}
              inspire a deeper understanding of the world around us.
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          sx={{ m: 10 }}
        >
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
