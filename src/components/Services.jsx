import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Companies } from './common/layouts/companies';
import servicesIcon from '../assets/Icons/00.SERVICES.png';
import whyUs from '../assets/Icons/01.WHYUS.png';

export const Services = () => {
  return (
    <Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4}></Grid>

        <Grid item xs={7}>
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">OUR SERVICES</Typography>
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
        <Grid item xs={7}>
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
                Our speciality is creating medical content for a wide variety of
                packages. As key stakeholders of the project, our number one
                priority is to work closely with you to create your science
                story
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <br />
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
          <Typography variant="h5">WHY US?</Typography>
          <Divider sx={{ backgroundColor: '#ff6f80' }} />
          <Typography>
            As scientists turned artists, we bring a unique blend of expertise
            and years of experience serving academia, biotech, and the health
            industry. Collaborating closely with you, we apply critical thinking
            and creativity to tackle your communication challenges.
          </Typography>
        </Grid>
      </Grid>

      <Companies />
    </Grid>
  );
};
