import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Container,
  TextField,
  Button,
  Snackbar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { ContactBtn } from './ContactBtn';
import { styled } from '@mui/material/styles';

const key = import.meta.env.VITE_API_KEY;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const serviceID = import.meta.env.VITE_SERVICE_ID;

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#DF367B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#DF367B',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#DF367B',
  },
});

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
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <form ref={form} onSubmit={(handleSubmit(onSubmit), sendEmail)}>
        <CustomTextField
          {...register('user_name', {
            required: 'Please add your name',
            minLength: {
              value: 2,
              message: 'The field must have at least 2 characters',
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
        <CustomTextField
          {...register('user_email', {
            required: 'Please add your email',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'The email is not valid',
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
        <CustomTextField
          type="text"
          fullWidth
          margin="normal"
          label="Subject"
          name="subject"
        />
        <CustomTextField
          type="text"
          fullWidth
          margin="normal"
          label="Message"
          name="message"
          multiline
          rows={4}
        />
        <ContactBtn
          sx={{ mt: 5 }}
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
