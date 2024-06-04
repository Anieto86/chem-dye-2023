import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const key = import.meta.env.VITE_API_KEY;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;

export const CustomForm = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, key).then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}></Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          type="text"
          fullWidth
          margin="normal"
          label="Your Name"
          name="user_name"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Your Email"
          name="user_email"
          type="email"
          required
        />
        <TextField
          type="text"
          fullWidth
          margin="normal"
          label="Subject"
          name="subject"
        />
        <TextField
          type="text"
          fullWidth
          margin="normal"
          label="Message"
          name="message"
          multiline
          rows={4}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Send Message
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          message="SUCCESS!"
          action={action}
        />
      </form>
    </Container>
  );
};
