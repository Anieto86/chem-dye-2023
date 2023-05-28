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
import { ContactBtn } from './common/layouts/ContactBtn';

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
        <Grid item xs={4}>
          icon
        </Grid>
        <Grid item xs={7}>
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">OUR SERVICESs</Typography>
            </AccordionSummary>
            <Divider sx={{ backgroundColor: 'pink' }} />
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
          ICON
        </Grid>
        <Grid item xs={7}>
          <Accordion sx={{ boxShadow: 'none', border: 'none' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">WHY US?</Typography>
            </AccordionSummary>
            <Divider sx={{ backgroundColor: 'pink' }} />
            <AccordionDetails>
              <Typography>
                As scientists turned artists, we bring a unique blend of
                expertise and years of experience serving academia, biotech, and
                the health industry. Collaborating closely with you, we apply
                critical thinking and creativity to tackle your communication
                challenges.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <Grid item xs={16}>
        <ContactBtn title="Contact Us" />
      </Grid>
      <Companies />
    </Grid>
  );
};