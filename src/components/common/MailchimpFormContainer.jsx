import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { CustomForm } from './CustomForm';

export const MailchimpFormContainer = () => {
  // const uValue = import.meta.env.VITE_MAILCHIMP_U;
  // const idValue = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;
  // const apiKey = import.meta.env.API;

  // const postUrl = `https://chemdyeillustrations.us21.list-manage.com/subscribe/post?u=${uValue}&id=${idValue}`;

  // const postUrlcontact = `https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`;

  const postUrl = `https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
