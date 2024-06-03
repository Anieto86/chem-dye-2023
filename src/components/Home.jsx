import { Grid, Typography } from '@mui/material';
// import servicesIcon from '../assets/Icons/00.SERVICES.png';
// import whyUs from '../assets/Icons/01.WHYUS.png';
import { Companies } from './common/layouts/companies';
import { ContactBtn } from './common/ContactBtn';
import { Link, useLocation } from 'react-router-dom';
import backgroundImg from '../../src/assets/img/background-home.png';

export const Home = () => {
  let location = useLocation();
  return (
    <>
      <Grid
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'contain',
          // backgroundSize: '50%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid container columns={12}>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              sx={{ textAlign: 'right', fontWeight: 500, mb: 10 }}
            >
              Our Passion & Identity
            </Typography>
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
              We are a multidisciplinary team of{' '}
              <Typography sx={{ color: ' #DF367B', fontSize: 25 }}>
                {' '}
                scientists, graphic designers and artists.
              </Typography>
              Our main goal is to generate{' '}
              <Typography sx={{ color: ' #DF367B', fontSize: 25 }}>
                captivating scientific content and, together, bring your vision
                to life,
              </Typography>
              leaving a lasting mark in the world of science.
            </Typography>
            <Grid item sx={{ mt: 5 }}>
              <Link to={'/work'}>
                <ContactBtn title="Discovery our crew" />
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>

        <Grid container sx={{ height: '30vh' }}></Grid>

        <Grid container columns={12}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Typography
              variant="h2"
              sx={{ textAlign: 'left', fontWeight: 500, mb: 10 }}
            >
              How can we help you?
            </Typography>
          </Grid>

          <Grid item xs={6}></Grid>
          <Grid item xs={6} sx={{ textAlign: 'left' }}>
            <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
              We are a multidisciplinary team of{' '}
              <Typography sx={{ color: ' #DF367B', fontSize: 25 }}>
                {' '}
                scientists, graphic designers and artists.
              </Typography>
              Our main goal is to generate{' '}
              <Typography sx={{ color: ' #DF367B', fontSize: 25 }}>
                captivating scientific content and, together, bring your vision
                to life,
              </Typography>
              leaving a lasting mark in the world of science.
            </Typography>
            <Grid item sx={{ my: 5 }}>
              <Link to={'/work'}>
                <ContactBtn title="Uncover our solution" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ border: 'pink solid', my: 10 }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', fontWeight: 500, my: 10 }}
          >
            Our process, expertise and reliability
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
            As scientists turned artists, we bring a unique blend of experience
            and years of service in{' '}
            <Typography type="span" sx={{ color: ' #DF367B', fontSize: 25 }}>
              academia, biotechnology
            </Typography>{' '}
            and the{' '}
            <Typography type="span" sx={{ color: ' #DF367B', fontSize: 25 }}>
              health industry
            </Typography>
            Collaborating closely with you, we apply critical thinking and
            creativity to address your communication challenges.
          </Typography>
          <Grid item sx={{ my: 5 }}>
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
          <Grid item xs={4}>
            <Typography variant="h3" sx={{ textAlign: 'center' }}>
              Your science, our art: a partnership for success
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
            {location.pathname === '/' && (
              <Link
                target="_blank"
                to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
              >
                <ContactBtn title="Les's talk" />
              </Link>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
