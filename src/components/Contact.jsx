/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from '@mui/material';
import { CustomForm } from './common/CustomForm';
import { ContactBtn } from './common/ContactBtn';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/data';

export const Contact = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ mt: 30 }}>
            Tell us about your upcoming project and get a personalised quote
          </Typography>
          <Typography variant="h4" sx={{ my: 3 }}>
            Your project, your story: let's begin the conversation
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ my: 10 }}>
          <CustomForm />
        </Grid>
      </Grid>

      {/* <Grid item xs={5}>
        <Typography variant="h4" sx={{ textAlign: 'center', my: 10 }}>
          Keen on delving deeper into science communication, data visualisation,
          and science-related insights? We're currently crafting an exciting
          newsletter. Join our member list to be the first to know when this
          compelling material hits the wild!
        </Typography>
      </Grid> */}

      <Grid item xs={12} sx={{ my: 10 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <Box
            component="img"
            srcSet={`https://res.cloudinary.com/dcvzsick7/image/upload/v1718249865/02.%20Team/00_Mari_foto_editada_13062024_tfrtbp.jpg`}
            alt="Dr Mariana Oksdath"
            sx={{
              width: 350,
              height: 350,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <Typography variant="h2">Dr. Mariana Oksdath</Typography>
          <Typography variant="h4" mb={5} textAlign="center">
            Founder | Visual scientist and Science communicator
          </Typography>
          {contactInfo.map((contact) => (
            <Grid item key={contact}>
              <Typography variant="h4">{contact}</Typography>
            </Grid>
          ))}
          <Grid item>
            <Link
              target="_blank"
              to={'https://calendly.com/si-chemdye/30min?month=2024-06'}
            >
              <ContactBtn
                sx={{ mt: 5 }}
                type="submit"
                variant="contained"
                color="primary"
                title="Book a free chat"
              />
            </Link>
          </Grid>{' '}
        </Grid>
      </Grid>
    </Grid>
  );
};
