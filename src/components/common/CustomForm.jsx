import { Button } from '@mui/base';
import { Grid, TextField, TextareaAutosize } from '@mui/material';
import { useEffect, useState } from 'react';

export const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [msgBox, setMsgBox] = useState('');

  // useEffect(() => {
  //   // Obtener los valores almacenados en LocalStorage al cargar el componente
  //   const storedEmail = localStorage.getItem('newsletterEmail') || '';
  //   const storedFirstName = localStorage.getItem('newsletterFirstName') || '';
  //   const storedLastName = localStorage.getItem('newsletterLastName') || '';
  //   const storedMsgBox = localStorage.getItem('newsletterMsgBox') || '';

  //   // Establecer los estados locales con los valores de LocalStorage
  //   setEmail(storedEmail);
  //   setFirstName(storedFirstName);
  //   setLastName(storedLastName);
  //   setMsgBox(storedMsgBox);
  // }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   // Actualizar los estados locales y guardar los valores en LocalStorage cada vez que cambien
  //   if (name === 'EMAIL') {
  //     setEmail(value);
  //     localStorage.setItem('newsletterEmail', value);
  //   } else if (name === 'FNAME') {
  //     setFirstName(value);
  //     localStorage.setItem('newsletterFirstName', value);
  //   } else if (name === 'LNAME') {
  //     setLastName(value);
  //     localStorage.setItem('newsletterLastName', value);
  //   } else if (name === 'MBox') {
  //     setMsgBox(value);
  //     localStorage.setItem('newsletterMsgBox', value);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
        MERGE3: msgBox,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">Join our email list for future updates.</h3>

      {status === 'sending' && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === 'error' && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      <Grid className="mc-field-group">
        <label htmlFor="mce-EMAIL">
          Email Address <span className="asterisk">*</span>
        </label>
        <TextField
          type="email"
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          required={!email}
          value={email}
          placeholder="your@email.com"
          // onChange={handleInputChange}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid className="mc-field-group">
        <label htmlFor="mce-FNAME">First Name </label>
        <TextField
          type="text"
          name="FNAME"
          className="text"
          id="mce-FNAME"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Grid>
      <Grid className="mc-field-group">
        <label htmlFor="mce-LNAME">Last Name </label>
        <TextField
          type="text"
          name="LNAME"
          className=" text"
          id="mce-LNAME"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Grid>
      <Grid className="mc-field-group">
        <label htmlFor="mce-LNAME">Message us</label>
        <TextareaAutosize
          name="MBox"
          className="text"
          id="mce-MBox"
          minRows={10}
          value={msgBox}
          onChange={(e) => setMsgBox(e.target.value)}
        />
      </Grid>
      {/* <TextField
        // label="subscribe"
        type="submit"
        // formValues={[email, firstName, lastName]}
      /> */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        // formValues={[email, firstName, lastName]}
      >
        Subscribe
      </Button>
    </form>
  );
};
