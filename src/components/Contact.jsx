/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';
import { CustomForm } from './common/CustomForm';

const contactInfo = [
  'ChemDye Scientific Illustration',
  'Email: si.chemdye@gmail.com',
  'Phone: +61 0466252387',
];

export const Contact = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid item xs={12}>
          <Typography variant="h1" sx={{ my: 2 }}>
            Tell us about your upcoming project and get a personalised quote
          </Typography>
          <Typography variant="h4">
            Your project, your story: let's begin the conversation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <CustomForm />
        </Grid>
        {/* <Grid item sx={{ my}>
        <Link
          target="_blank"
          to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
        >
          <ContactBtn title="Let's get started" fSize={25} />
        </Link>
      </Grid> */}
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4" sx={{ textAlign: 'center', my: 10 }}>
          Keen on delving deeper into science communication, data visualisation,
          and science-related insights? We're currently crafting an exciting
          newsletter. Join our member list to be the first to know when this
          compelling material hits the wild!
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ my: 10 }}>
        {contactInfo.map((contact) => (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            key={contact}
            sx={{ my: 3 }}
          >
            <Grid item>
              <Typography variant="h2">{contact}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
