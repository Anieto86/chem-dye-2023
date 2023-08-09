import { Divider, Grid, Typography } from '@mui/material';
import img1 from '../assets/Icons/01-WORKSHOP-service.png';
import img2 from '../assets/Icons/02-GUIDANCE-service.png';
import img3 from '../assets/Icons/03-Illustrations-service.png';
import { ContactBtn } from './common/ContactBtn';

import { Link } from 'react-router-dom';

export const Service = () => {
  const services = [
    {
      title: 'WORKSHOPS',
      img: img1,
      subTitle:
        "This post explores transitioning from a comfortable career to the unknown, highlighting career changes' increasing prevalence and benefits. It emphasises self-reflection, curiosity, connecting with resources and like-minded individuals, and embracing hard work. Understanding one's professional identity and seeking an aligned environment is crucial. The post underscores exploring new possibilities, leveraging unique skills, and prioritising self-care. Patience, reflection, goal-setting, and self-care are essential throughout the career transformation process.",
    },
    {
      title: 'SCIENTIFIC DESIGN CONSULTANT',
      img: img2,
      subTitle:
        'This post explores the role of scientific illustrators in science communication, highlighting their ability to translate complex concepts into captivating visuals. It emphasises diverse paths in the field and the importance of utilising their services. In-house scientific illustrators are recommended to enhance science communication.',
    },
    {
      title: 'SCIENTIFIC | MEDICAL ILLUSTRATIONS',
      img: img3,
      subTitle:
        'Harness the power of social media to bridge the gap between scientists and society. Engage, create content, and embrace fun while conveying research findings in simple language and visually compelling ways. Amplify your impact and change perceptions by disseminating science and enhancing scientific literacy within society.',
    },
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={10} sx={{ fontSize: 60 }}>
          <Typography variant="h2" fontWeight={600}>
            We are translators, storytellers
            <br />
            and educators. <br />
          </Typography>
          <Grid item xs={9.5} sx={{ my: 10 }}>
            <ContactBtn title="Connect with us" />
          </Grid>
        </Grid>
        <Grid container columns={15}>
          {services.map((service, i) => (
            <Grid item xs={5} sx={{ p: 5 }} key={i}>
              <Grid item display="flex" justifyContent="center">
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: 250,
                    height: 'auto',
                  }}
                />
              </Grid>
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {service.title}
              </Typography>
              <Grid item display="flex" justifyContent="center">
                <Divider
                  sx={{
                    my: 5,
                    backgroundColor: '#ff6f80',
                    width: 300,
                  }}
                />
              </Grid>
              <Typography variant="body1" wrap>
                {service.subTitle}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item display="flex" justifyContent="center" sx={{ my: 20 }}>
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Request a quote" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
