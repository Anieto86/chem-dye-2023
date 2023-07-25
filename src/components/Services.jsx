import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import servicesIcon from '../assets/Icons/00.SERVICES.png';
import whyUs from '../assets/Icons/01.WHYUS.png';
import { Companies } from './common/layouts/companies';
import { ContactBtn } from './common/ContactBtn';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item sx={{ my: 5 }} xs={10}>
          <Typography
            variant="body1"
            color="initial"
            sx={{ fontSize: 30, textAlign: 'center', m: 10 }}
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
        <Grid item xs={7}>
          <Typography variant="h4">OUR SERVICES</Typography>
          <br />
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">REPORTING AND PRESENTATION</Typography>
            </AccordionSummary>

            <Divider sx={{ backgroundColor: '#ff6f80' }} />
            <AccordionDetails>
              <Typography>
                Our speciality is creating medical content for a wide variety of
                packages. As key stakeholders of the project, our number one
                priority is to work closely with you to create your science
                story
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={4}>
          <img src={servicesIcon} alt="Image 1" />
        </Grid>
        <Grid item xs={7}>
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">SCIENCE COMMUNICATION</Typography>
            </AccordionSummary>

            <Divider sx={{ backgroundColor: '#ff6f80' }} />
            <AccordionDetails>
              <Typography>
                Our speciality is creating medical content for a wide variety of
                packages. As key stakeholders of the project, our number one
                priority is to work closely with you to create your science
                story
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={7} sx={{ mb: 2 }}>
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">MEDICAL CONTENT</Typography>
            </AccordionSummary>
            <Divider sx={{ backgroundColor: '#ff6f80' }} />
            <AccordionDetails>
              <Typography>
                Our specialty is creating medical content for a wide variety of
                packages. As key stakeholders of the project, our number one
                priority is to work closely with you to create your science
                story
              </Typography>
            </AccordionDetails>
          </Accordion>
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
      >
        <Grid item xs={4}>
          <img src={whyUs} alt="Image 2" />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4">WHY US?</Typography>
          <Typography>
            As scientists turned artists, we bring a unique blend of expertise
            and years of experience serving academia, biotech, and the health
            industry. Collaborating closely with you, we apply critical thinking
            and creativity to tackle your communication challenges.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <Companies />
        </Grid>
      </Grid>
    </>
  );
};
