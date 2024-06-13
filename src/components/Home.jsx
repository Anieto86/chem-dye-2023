import { Box, Grid, Typography } from '@mui/material';
import { Companies } from './common/layouts/companies';
import { ContactBtn } from './common/ContactBtn';
import { Link, useLocation } from 'react-router-dom';

const backgroundImg =
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717638651/05.%20Home%20background%20images/5-cell_2_d8ajpz.jpg';

export const Home = () => {
  let location = useLocation();
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid container columns={12}>
          <Grid item xs={6}>
            <Typography variant="h1" sx={{ textAlign: 'right', mb: 10 }}>
              Our Passion & Identity
            </Typography>
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={3} />
          <Grid item xs={3} sx={{ textAlign: 'right' }}>
            <Typography variant="h4">
              We are a multidisciplinary team of{' '}
              <Box
                component="span"
                sx={{
                  color: '#DF367B',
                }}
              >
                scientists, graphic designers and artists.
              </Box>{' '}
              Our main goal is to generate{' '}
              <Box component="span" sx={{ color: '#DF367B' }}>
                captivating scientific content and, together, bring your vision
                to life,
              </Box>{' '}
              leaving a lasting mark in the world of science.
            </Typography>
            <Grid item sx={{ mt: 5 }}>
              <Link to={'/crew'}>
                <ContactBtn title="Discovery our crew" />
              </Link>
            </Grid>
          </Grid>

          <Grid item xs={6} />
        </Grid>

        <Grid container sx={{ height: '30vh' }}></Grid>

        <Grid container columns={12}>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant="h1" sx={{ textAlign: 'left', mb: 10 }}>
              How can we help you?
            </Typography>
          </Grid>

          <Grid item xs={6} />
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <Typography variant="h4">
              We will help you unlock the full potential of your research with
              our comprehensive range of services tailored{' '}
              <Box component="span" sx={{ color: '#DF367B' }}>
                for the Healthcare, Pharmaceutical, and Biotechnology
                industries.
              </Box>{' '}
            </Typography>
            <Grid item sx={{ my: 5 }}>
              <Link to={'/services'}>
                <ContactBtn title="Uncover our solution" />
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 10 }}
      >
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ textAlign: 'center', my: 10 }}>
            Our process, expertise and reliability
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: 'center' }} xs={5}>
          <Typography variant="h4">
            As scientists turned artists, we bring a unique blend of experience
            and years of service in{' '}
            <Box component="span" sx={{ color: '#DF367B' }}>
              academia, biotechnology
            </Box>{' '}
            and the{' '}
            <Box component="span" sx={{ color: '#DF367B' }}>
              health industry
            </Box>
            . Collaborating closely with you, we apply critical thinking and
            creativity to address your communication challenges.
          </Typography>

          <Grid item sx={{ my: 6 }}>
            <Link to={'/work'}>
              <ContactBtn title="Check out our work" />
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Companies />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 20 }}
        >
          <Grid item>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Your science, our art:
            </Typography>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              a partnership for success
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
            {location.pathname === '/home' && (
              <Link to={`/contact`}>
                <ContactBtn title="Les's talk" />
              </Link>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
