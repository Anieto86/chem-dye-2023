/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from '@mui/material';

import { ContactBtn } from '../components/common/ContactBtn';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../data/data';
import { TitleHeader } from '../components/common/TitleHeader';
import { CustomForm } from '../components/common/CustomForm';

export const Contact = () => {
  return (
    <>
      <TitleHeader
        title=" Tell us about your upcoming project and get a personalised quote"
        subTitle="  Your project, your story: let's begin the conversation"
      />
      <CustomForm />

      <Grid item xs={12} sx={{ my: 10 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ m: 2 }}
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
          <Grid item p={2}>
            <Typography variant="h2" textAlign="center">
              Dr. Mariana Oksdath
            </Typography>
            <Typography variant="h4" mb={5} textAlign="center">
              Founder | Visual scientist and Science communicator
            </Typography>
            {contactInfo.map((contact) => (
              <Grid item key={contact}>
                <Typography variant="h4" textAlign="center">
                  {contact}
                </Typography>
              </Grid>
            ))}
          </Grid>
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
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
