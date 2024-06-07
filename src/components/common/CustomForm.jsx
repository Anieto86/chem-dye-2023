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
import { useForm } from 'react-hook-form';
import { ContactBtn } from './ContactBtn';

const key = import.meta.env.VITE_API_KEY;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;

export const CustomForm = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValue: { user_name: '', user_email: '' },
    mode: 'onChange',
  });

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
  // console.log(form.current.user_name);

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <form ref={form} onSubmit={(handleSubmit(onSubmit), sendEmail)}>
        <TextField
          {...register('user_name', {
            required: 'El campo no puede estar vacío',
            minLength: {
              value: 5,
              message: 'El campo debe tener al menos 5 caracteres',
            },
          })}
          type="text"
          fullWidth
          margin="normal"
          label="Your Name"
          name="user_name"
          required
          error={!!errors.user_name}
          helperText={errors.user_name ? errors.user_name.message : ''}
        />
        <TextField
          {...register('user_email', {
            required: 'El campo es obligatorio',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'El formato del email no es válido',
            },
          })}
          fullWidth
          margin="normal"
          label="Your Email"
          name="user_email"
          type="email"
          required
          error={!!errors.user_email}
          helperText={errors.user_email ? errors.user_email.message : ''}
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
        />
        <ContactBtn
          type="submit"
          variant="contained"
          color="primary"
          onClickShow={handleClick}
          disabled={!isValid}
          title="Let's get Started"
        />

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
