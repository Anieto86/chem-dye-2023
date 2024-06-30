/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { ContactBtn } from '../components/common/ContactBtn';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/data';
import { TitleHeader } from '../components/common/TitleHeader';
import { CustomForm } from '../components/common/CustomForm';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  boxShadow: 'none',
  width: 'auto',
  height: '100%',
  maxWidth: 400,
  borderRadius: 5,
});

const ContactInfo = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    {contactInfo.map((contact) => (
      <Grid item key={contact}>
        <Typography variant="h5">{contact}</Typography>
      </Grid>
    ))}
  </Grid>
);

export const Contact = () => (
  <>
    <TitleHeader
      title="Tell us about your upcoming project and get a personalised quote"
      subTitle="Your project, your story: let's begin the conversation"
    />
    <CustomForm />
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 10 }}
    >
      <StyledCard>
        <CardMedia
          component="img"
          srcSet={`https://res.cloudinary.com/dcvzsick7/image/upload/t_Rezise/v1718249865/02.%20Team/00_Mari_foto_editada_13062024_tfrtbp.jpg`}
          sizes="(max-width: 600px) 100vw, 50vw"
          title="Dr Mariana Oksdath"
          loading="lazy"
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h2">
            Dr. Mariana Oksdath
          </Typography>
          <Typography variant="h4" color="text.secondary">
            Founder | Visual scientist and Science communicator
          </Typography>
        </CardContent>
      </StyledCard>
      <ContactInfo />
      <Grid item>
        <Link
          target="_blank"
          to={'https://calendly.com/si-chemdye/30min?month=2024-06'}
        >
          <ContactBtn sx={{ mt: 5 }} type="submit" title="Book a free chat" />
        </Link>
      </Grid>
    </Grid>
  </>
);
