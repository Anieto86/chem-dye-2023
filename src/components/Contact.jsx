import { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'EMAIL') {
      setEmail(value);
    } else if (name === 'FNAME') {
      setFirstName(value);
    } else if (name === 'LNAME') {
      setLastName(value);
    }
  };

  return (
    <div id="mc_embed_shell">
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
      <div id="mc_embed_signup">
        <form
          action="https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required=""
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input
                type="text"
                name="FNAME"
                className=" text"
                id="mce-FNAME"
                value={firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input
                type="text"
                name="LNAME"
                className=" text"
                id="mce-LNAME"
                value={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_d18dcd67615ab44686e887477_be15be90da"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
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
              </div>
            </div>
          </div>
        </form>
      </div>
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
    </div>
  );
};
