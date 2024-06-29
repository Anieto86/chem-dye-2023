import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { RoadMap } from '../components/RoadMap';
import { services } from '../../data/data';
import { timelineItems } from '../../data/data';
import { useTheme } from '@emotion/react';
import { ContactBtn } from '../components/common/ContactBtn';
import { TitleHeader } from '../components/common/TitleHeader';

const StyledCardMedia = styled(CardMedia)({
  borderRadius: '8px',
});

const StyledImage = styled('img')({
  width: '200px',
  objectFit: 'contain',
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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <TitleHeader
        title="  We are translators, storytellers and educators."
        subTitle="    Transforming complexity into clear narratives."
      />
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
            <Grid item xs={12} sm={12} md={6} key={i}>
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
                <Grid sx={{ minHeight: 200, whiteSpace: 'pre-line' }}>
                  {text.map((x, idx) => (
                    <Typography key={idx}>{x}</Typography>
                  ))}
                </Grid>
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
          src="https://res.cloudinary.com/dcvzsick7/video/upload/v1717712846/01.%20Portfolio/Videos/Nirmal_video_mjbcbw.mp4"
          autoPlay
          muted
          controls
        />
      </Grid>
      <Grid item display="flex" justifyContent="center" sx={{ my: 20 }}>
        <Link to={`/contact`}>
          <ContactBtn title="Budget your work" />
        </Link>
      </Grid>

      <Grid item>
        {!isDesktop ? (
          <>
            {timelineItems.map((item, i) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={i} my={20}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <StyledImage src={item.image} alt={item.title} />
                  </Box>{' '}
                  <Grid item xs={12}>
                    <Typography variant="h2" textAlign="center" sx={{ mt: 3 }}>
                      {item.title}
                    </Typography>
                  </Grid>
                  {!isMobile && (
                    <Box display="flex" justifyContent="center">
                      <Typography
                        textAlign="center"
                        variant="h5"
                        sx={{ width: '50%', mt: 5 }}
                      >
                        {item.text}
                      </Typography>
                    </Box>
                  )}
                </Grid>
              );
            })}
          </>
        ) : (
          <RoadMap />
        )}
      </Grid>
    </>
  );
};
