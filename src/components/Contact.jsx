import { Grid, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ContactBtn } from './common/ContactBtn';
import { Link } from 'react-router-dom';
// import { Box } from '@mui/system';
import contactImg from '../assets/img/Blood.png';

// import { MailchimpFormContainer } from '../components/common/MailchimpFormContainer';
// <MailchimpFormContainer />

const contactInfo = [
  {
    icon: (
      <EmailIcon
        sx={{
          color: '#DF367C',
          fontSize: 40,
          display: 'flex',
          alignItems: 'center',
        }}
      />
    ),
    text: 'si.chemdye@gmail.com',
  },
  {
    icon: (
      <LocalPhoneIcon
        sx={{
          color: '#DF367C',
          fontSize: 40,
          display: 'flex',
          alignItems: 'center',
        }}
      />
    ),
    text: '+61 0466252387',
  },
];

export const Contact = () => {
  return (
    <Grid container justifyContent="center" spacing={6}>
      <Grid item display="flex" justifyContent="center" xs={12}>
        <img
          src={contactImg}
          alt="Image 1"
          style={{ width: '50%', height: 'auto' }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h2" sx={{ fontSize: 40 }}>
          ChemDye Scientific Illustrations
        </Typography>
      </Grid>
      {contactInfo.map((contact) => (
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={3}
          key={contact.text}
        >
          <Grid item>{contact.icon}</Grid>
          <Grid item>
            <Typography variant="h2" sx={{ fontSize: 40 }}>
              {contact.text}
            </Typography>
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Link
          target="_blank"
          to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
        >
          <ContactBtn title="Email us" fSize={30} />
        </Link>
      </Grid>
    </Grid>
  );
};
