import { Box, Divider, Grid, Typography } from '@mui/material';
import img1 from '../assets/Icons/01-WORKSHOP-service.png';
import img2 from '../assets/Icons/02-GUIDANCE-service.png';
import img3 from '../assets/Icons/03-Illustrations-service.png';
import { ContactBtn } from './common/ContactBtn';

import { Link } from 'react-router-dom';
import { RoadMap } from './RoadMap';

export const Service = () => {
  const services = [
    {
      title: 'WORKSHOPS',
      img: img1,
      text: "This post explores transitioning from a comfortable career to the unknown, highlighting career changes' increasing prevalence and benefits. It emphasises self-reflection, curiosity, connecting with resources and like-minded individuals, and embracing hard work. Understanding one's professional identity and seeking an aligned environment is crucial. The post underscores exploring new possibilities, leveraging unique skills, and prioritising self-care. Patience, reflection, goal-setting, and self-care are essential throughout the career transformation process.",
      footNote: 'Learn about scientific illustrations',
    },
    {
      title: 'SCIENTIFIC DESIGN CONSULTANT',
      img: img2,
      text: 'This post explores the role of scientific illustrators in science communication, highlighting their ability to translate complex concepts into captivating visuals. It emphasises diverse paths in the field and the importance of utilising their services. In-house scientific illustrators are recommended to enhance science communication.',
      footNote: 'We got you',
    },
    {
      title: 'SCIENTIFIC | MEDICAL ILLUSTRATIONS',
      img: img3,
      text: `Presentations
      Posters
      Graphic designed reports
      Infographics
      Graphical and video abstracts
      Educational material
      Medical manuals
      Custom anatomical medical illustrations`,

      footNote: 'Communicate with impact',
    },
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={10} sx={{ fontSize: 60 }}>
          <Typography variant="h2">
            We are translators, storytellers
            <br />
            and educators. <br />
          </Typography>{' '}
          <Typography>
            Transforming complexity into clear narratives.
          </Typography>
          <Grid item xs={9.5} sx={{ my: 10 }}>
            <ContactBtn title="Connect with us" />
          </Grid>
        </Grid>
        <Grid container columns={15}>
          {services.map((service, i) => (
            <Grid item xs={5} sx={{ p: 1 }} key={i}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: '#EAEBED',
                  borderRadius: 4,
                  minHeight: 600,
                }}
              >
                <Grid container>
                  <Grid item xs={9}>
                    <Typography variant="h6">{service.title}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <img
                      src={service.img}
                      alt={service.title}
                      style={{
                        width: 70,
                        height: 'auto',
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item display="flex" justifyContent="center"></Grid>
                <Typography variant="body1">{service.text}</Typography>
                <Divider
                  sx={{
                    height: 1,
                    backgroundColor: '#000000',
                    marginTop: 2,
                  }}
                />
                <Typography
                  textAlign={'right'}
                  sx={{ p: 2, fontWeight: 'bold' }}
                >
                  {service.footNote}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item display="flex" justifyContent="center" sx={{ my: 20 }}>
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Budget your work" />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: 'center', m: 10 }}>
            How is it to work with us?
          </Typography>
        </Grid>
        <Grid item sx={{ outline: 'red solid 1px' }}>
          <RoadMap />
        </Grid>
      </Grid>
    </Grid>
  );
};
