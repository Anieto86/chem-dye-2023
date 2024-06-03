import { Card, Grid, Typography } from '@mui/material';
import img1 from '../assets/Icons/01-WORKSHOP-service.png';
import img2 from '../assets/Icons/02-GUIDANCE-service.png';
import img3 from '../assets/Icons/03-Illustrations-service.png';
import img4 from '../assets/Icons/04_Workshop 1.png';
import { ContactBtn } from './common/ContactBtn';

import { Link } from 'react-router-dom';
import { RoadMap } from './RoadMap';

export const Service = () => {
  const services = [
    {
      title: 'Graphic Design',
      img: img1,
      text: [
        'Reports Logos',
        'Social media graphics',
        'Educational material',
        'Print designs',
      ],
    },
    {
      title: 'Scientific Illustrations',
      img: img2,
      text: [
        'Figures for journals',
        'Graphical abstracts',
        'Posters',
        'Infographics',
        'Presentations',
        ' Medical illustrations',
      ],
    },
    {
      title: 'Animation',
      img: img3,
      text: ['Video abstracts', ' 3D Animation', '3D Illustrations'],
    },
    {
      title: 'Workshop',
      img: img4,
      text: [
        'Join our workshops to master the art of scientific illustration, whether you’re a student or a scientist. Learn to translate ideas from conception to reality in a collaborative and imaginative environment',
      ],
    },
  ];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={10} sx={{ fontSize: 60 }}>
          <Typography variant="h2" sx={{ my: 2 }}>
            We are translators, storytellers and educators.
          </Typography>
          <Typography>
            Transforming complexity into clear narratives.
          </Typography>
          <Grid item xs={9.5} sx={{ my: 10 }}>
            <ContactBtn title="Connect with us" />
          </Grid>
        </Grid>
        <Grid container columns={12} sx={{ p: 4 }}>
          {services.map((service, i) => {
            const { title, img, text } = service;
            return (
              <Grid item xs={6} sx={{ p: 1 }} key={i}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: 8,
                    minHeight: 400,
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <img
                        src={img}
                        alt={title}
                        style={{
                          width: 100,
                          height: 'auto',
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {title}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item display="flex" justifyContent="center"></Grid>
                  <Typography variant="body1">
                    {text.map((x) => (
                      <Typography variant="h6" key={x}>
                        {x}
                      </Typography>
                    ))}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
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
