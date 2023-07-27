import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Obtener los valores almacenados en LocalStorage al cargar el componente
    const storedEmail = localStorage.getItem('newsletterEmail') || '';
    const storedFirstName = localStorage.getItem('newsletterFirstName') || '';
    const storedLastName = localStorage.getItem('newsletterLastName') || '';

    // Establecer los estados locales con los valores de LocalStorage
    setEmail(storedEmail);
    setFirstName(storedFirstName);
    setLastName(storedLastName);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Actualizar los estados locales y guardar los valores en LocalStorage cada vez que cambien
    if (name === 'EMAIL') {
      setEmail(value);
      localStorage.setItem('newsletterEmail', value);
    } else if (name === 'FNAME') {
      setFirstName(value);
      localStorage.setItem('newsletterFirstName', value);
    } else if (name === 'LNAME') {
      setLastName(value);
      localStorage.setItem('newsletterLastName', value);
    }
  };

  return (
    <Grid id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style type="text/css">
        {`
          #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <Grid id="mc_embed_signup">
        <form
          action="https://chemdyeillustrations.us21.list-manage.com/subscribe/post?u=d18dcd67615ab44686e887477&amp;id=be15be90da&amp;f_id=001e59e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <Grid id="mc_embed_signup_scroll">
            <h2>Subscribe to Our Newsletter</h2>
            <Grid className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </Grid>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </Grid>
            <Grid id="mce-responses" className="clear foot">
              <Grid
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></Grid>
              <Grid
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></Grid>
            </Grid>
            <Grid
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              <input
                type="text"
                name="b_d18dcd67615ab44686e887477_be15be90da"
                tabIndex="-1"
                value=""
                onChange={handleInputChange}
              />
            </Grid>
            <Grid className="optionalParent">
              <Grid className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                  style={{
                    backgroundColor: '#DF367C',
                    marginBottom: 2,
                    borderRadius: '15px',
                    fontWeight: '600',
                  }}
                />
                <p className="brandingLogo" style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/iqfyLs"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                      alt="referral badge"
                    />
                  </a>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        {`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = EMAIL;
            ftypes[0] = merge;
            fnames[1] = FNAME;
            ftypes[1] = merge;
            fnames[2] = LNAME;
            ftypes[2] = merge;
            fnames[3] = ADDRESS;
            ftypes[3] = merge;
            fnames[4] = PHONE;
            ftypes[4] = merge;
            fnames[5] = BIRTHDAY;
            ftypes[5] = merge;
          })(jQuery);
          var $mcj = jQuery.noConflict(true);
        `}
      </script>
    </Grid>
  );
};
