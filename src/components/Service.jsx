import { Card, CardMedia, Grid, Typography } from '@mui/material';

import { ContactBtn } from './common/ContactBtn';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { RoadMap } from './RoadMap';

const StyledCardMedia = styled(CardMedia)({
  height: 'auto',
  width: '70%',
  borderRadius: '8px',
});

const StyledImage = styled('img')({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
});

const StyledCard = styled(Card)({
  borderRadius: 10,
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  maxWidth: 400,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: '20px',
  '&:hover': {
    border: '#facd2d solid',
  },
});

export const Service = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Typography variant="h1" sx={{ mt: 30 }}>
          We are translators, storytellers and educators.
        </Typography>
        <Typography variant="h4" sx={{ mt: 3 }}>
          Transforming complexity into clear narratives.
        </Typography>
        <Grid item xs={9.5} sx={{ my: 10 }}>
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={4}
          sx={{ mt: 10 }}
        >
          {services.map((service, i) => {
            const { title, img, text } = service;
            return (
              <Grid item xs={6} sm={12} md={6} key={i}>
                <StyledCard sx={{ px: 9, p: 6 }}>
                  <StyledImage src={img} alt={title} sx={{ m: -4 }} />
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      sx={{
                        my: 4,
                      }}
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Typography sx={{ minHeight: 200, whiteSpace: 'pre-line' }}>
                    {text.map((x) => (
                      <Typography variant="h7" key={x}>
                        {x}
                      </Typography>
                    ))}
                  </Typography>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mt: 50, display: 'flex', justifyContent: 'center' }}
        >
          <StyledCardMedia
            component="video"
            src="https://res.cloudinary.com/dcvzsick7/video/upload/v1717712846/01.%20Portfolio/Nirmal_video_mjbcbw.mp4"
            autoPlay
            muted
            controls
          />
        </Grid>
        <Grid item display="flex" justifyContent="center" sx={{ my: 20 }}>
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Budget your work" />
          </Link>
        </Grid>

        <Grid item>
          <RoadMap />
        </Grid>
      </Grid>
    </Grid>
  );
};

const services = [
  {
    title: 'Graphic Design',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550769/04.%20Services/02_Guidance_vnsb3i.png',
    text: [
      'Reports Logos\n',
      'Social media graphics\n',
      'Educational material\n',
      'Print designs\n',
    ],
  },
  {
    title: 'Scientific Illustrations',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550770/04.%20Services/02_Illustrations_vn3jsx.png',
    text: [
      'Figures for journals\n',
      'Graphical abstracts\n',
      'Posters\n',
      'Infographics\n',
      'Presentations\n',
      'Medical illustrations\n',
    ],
  },
  {
    title: 'Animation',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550770/04.%20Services/03_Animation_srscoo.png',
    text: ['Video abstracts\n', '3D Animation\n', '3D Illustrations\n'],
  },
  {
    title: 'Workshop',
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550771/04.%20Services/04_Workshop_gecv9n.png',
    text: [
      'Join our workshops to master the art of scientific illustration, whether you’re a student or a scientist. Learn to translate ideas from conception to reality in a collaborative and imaginative environment',
    ],
  },
];
