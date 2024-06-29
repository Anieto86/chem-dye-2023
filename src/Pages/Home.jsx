import { Box, Grid, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { Companies } from '../components/common/Companies';
import { ContactBtn } from '../components/common/ContactBtn';

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
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center', // Center text on small screens
                md: 'flex-end', // Align text to the right on medium and larger screens
              },
              textAlign: {
                xs: 'center', // Center text on small screens
                md: 'right', // Align text to the right on medium and larger screens
              },
            }}
          >
            <Box sx={{ width: '100%', mt: 10 }}>
              <Typography variant="h1" sx={{ mb: 10 }}>
                Our Passion & Identity
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={0} md={6} />
          <Grid item xs={12} md={1} />
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              flexDirection: 'column',
              alignItems: {
                xs: 'center', // Center text on small screens
                md: 'flex-end', // Align text to the right on medium and larger screens
              },
              textAlign: {
                xs: 'center', // Center text on small screens
                md: 'right', // Align text to the right on medium and larger screens
              },
            }}
          >
            <Typography variant="h4" sx={{ px: { xs: 4, md: 0 } }}>
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
              <Box component="span" sx={{ color: '#DF367B', p: 2 }}>
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
          <Grid item xs={12} md={6} />
        </Grid>

        <Grid container sx={{ height: '30vh' }}></Grid>
        <Grid container columns={12}>
          <Grid item xs={12} md={6} />
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center', // Center text on small screens
                md: 'flex-start', // Align text to the left on medium and larger screens
              },
              textAlign: {
                xs: 'center', // Center text on small screens
                md: 'left', // Align text to the left on medium and larger screens
              },
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="h1" sx={{ mb: 10 }}>
                How can we help you?
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} />
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: {
                xs: 'center', // Center text on small screens
                md: 'flex-start', // Align text to the left on medium and larger screens
              },
              textAlign: {
                xs: 'center', // Center text on small screens
                md: 'left', // Align text to the left on medium and larger screens
              },
            }}
          >
            <Typography variant="h4" sx={{ px: { xs: 4, md: 0 } }}>
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
          <Grid item xs={12} md={1} />
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
        <Grid item sx={{ textAlign: 'center' }} xs={10}>
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
              <ContactBtn title="See our work" />
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
            {location.pathname === '/' && (
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
