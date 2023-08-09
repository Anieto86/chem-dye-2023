import { Divider, Grid, Typography } from '@mui/material';
import servicesIcon from '../assets/Icons/00.SERVICES.png';
import whyUs from '../assets/Icons/01.WHYUS.png';
import { Companies } from './common/layouts/companies';
import { ContactBtn } from './common/ContactBtn';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 10 }}
      >
        <Grid item sx={{ my: 5, p: 4 }} xs={10}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 40, textAlign: 'center', m: 10 }}
          >
            We excel in crafting{' '}
            <span style={{ fontWeight: '700' }}>
              compelling scientific content
            </span>{' '}
            to communicate your research and discoveries effectively. As your
            trusted partner,{' '}
            <span style={{ fontWeight: '700' }}>
              our top priority is collaborating closely
            </span>{' '}
            with you, ensuring we create visuals that beautifully illustrate
            your science story. Together,{' '}
            <span style={{ fontWeight: '700' }}>
              let’s bring your vision to fruition and make a lasting impact in
              the world of science.
            </span>
          </Typography>

          <Divider sx={{ backgroundColor: '#ff6f80' }} />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={5}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 800 }}>
            OUR SERVICES
          </Typography>
          <Typography variant="h5">REPORTING AND PRESENTATION</Typography>
          <Divider sx={{ backgroundColor: '#ff6f80', my: 2 }} />
          <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
            <span style={{ fontWeight: 600 }}> Presentations | </span>
            Engaging and professional slideshows tailored for scientific
            conferences, seminars, and lectures. <br />
            <span style={{ fontWeight: 600 }}>Posters |</span> Vibrant and
            visually appealing posters for conferences, academic events, and
            research presentations.
            <br />
            <span style={{ fontWeight: 600 }}>
              Graphic Designed Reports |
            </span>{' '}
            Custom-designed reports with visually appealing layouts, graphics,
            and illustrations.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={servicesIcon} alt="Image 1" style={{ width: '80%' }} />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h5">SCIENCE COMMUNICATION</Typography>

          <Divider sx={{ backgroundColor: '#ff6f80', my: 2 }} />

          <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
            <span style={{ fontWeight: 600 }}>Infographics |</span> Eye-catching
            and informative visual representations of scientific data, and
            statistics. <br />
            <span style={{ fontWeight: 600 }}> Visual Abstracts | </span>
            Visually appealing summaries of scientific studies. <br />
            <span style={{ fontWeight: 600 }}> Branded Content |</span>
            Design services that effectively showcase your organisation’s
            identity and message. <br />
            <span style={{ fontWeight: 600 }}>Social Media Content | </span>
            Compelling visuals optimised for social media platforms to promote
            scientific research. <br />
            <span style={{ fontWeight: 600 }}> Educational Materia |</span>{' '}
            Visually appealing resources like diagrams, charts, and
            illustrations.
          </Typography>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={5} sx={{}}>
          <Typography variant="h5">MEDICAL CONTENT</Typography>

          <Divider sx={{ backgroundColor: '#ff6f80', my: 2 }} />

          <Typography sx={{ fontSize: 25, lineHeight: '1.2' }}>
            <span style={{ fontWeight: 600 }}> Medical Manuals |</span> Clear
            and informative manuals for medical procedures, protocols, and
            guidelines. Custom anatomical medical illustrations
          </Typography>

          <Grid item sx={{ mt: 5 }}>
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
        spacing={2}
        sx={{ mt: 40 }}
      >
        <Grid item xs={4}>
          <img src={whyUs} alt="Image 2" style={{ width: '80%' }} />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            WHY US?
          </Typography>
          <Typography sx={{ fontSize: 30, lineHeight: '1.2' }}>
            As scientists turned artists, we bring a unique blend of expertise
            and years of experience serving academia, biotech, and the health
            industry. Collaborating closely with you, we apply critical thinking
            and creativity to tackle your communication challenges.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 40 }}
      >
        <Grid item xs={10}>
          <Companies />
        </Grid>
      </Grid>
    </>
  );
};
