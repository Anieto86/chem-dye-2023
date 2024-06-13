/* eslint-disable react/no-unescaped-entities */
import { Box, Grid, Typography } from '@mui/material';

export const Cookies = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid container columns={12}>
          <Grid item xs={6}>
            <Typography variant="h1" item xs={6} sx={{ mt: 30 }}>
              Cookies
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }}>
              Last Updated: 2023
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" item xs={6} sx={{ mt: 30 }}>
              Introduction
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              This Cookie Policy ("Policy") explains how ChemDye Scientific
              Illustrations ("we," "us," or "our") uses cookies and similar
              technologies on our website. By using our website, you consent to
              the use of cookies as described in this Policy.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              What Are Cookies?
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Cookies are small text files placed on your device when you visit
              a website. They are commonly used to improve website functionality
              and user experience.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Types of Cookies
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              a. Necessary Cookies: These cookies are essential for the website
              to function properly. They help enable core functionality, such as
              security and accessibility. You cannot opt out of these cookies.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              a. Necessary Cookies: These cookies are essential for the website
              to function properly. They help enable core functionality, such as
              security and accessibility. You cannot opt out of these cookies.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              c. Functionality Cookies: These cookies allow us to remember
              choices you make on our website (e.g., language preferences) to
              enhance your experience.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              d. Targeting or Advertising Cookies: These cookies track your
              browsing habits and are used to deliver targeted advertising based
              on your interests. We obtain your consent before using these
              cookies.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              How We Use Cookies
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                We use cookies for the following purposes:
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • To improve the functionality and performance of our website.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • To analyse user behaviour and trends.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • To provide personalised content and advertising.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • To ensure the security and integrity of our website.
              </Typography>
            </Box>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Your Consent
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              By using our website, you consent to the use of cookies as
              described in this Policy. You can manage your cookie preferences
              through your browser settings or by following the instructions
              provided in Section 6.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Managing Cookies
            </Typography>
            <Box sx={{ my: 3 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                Manage your cookies:
              </Typography>
              <Typography variant="h5" sx={{ mt: 3 }}>
                Most web browsers allow you to manage and control cookies
                through your browser settings. You can:
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • Delete cookies already stored on your device.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • Block certain types of cookies.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                • Set your browser to notify you when cookies are placed.
              </Typography>
              <Typography variant="h6" sx={{ my: 1 }}>
                Please note that if you disable or delete cookies, some parts of
                our website may not function correctly.
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Most web browsers allow you to manage and control cookies through
              your browser settings. You can:
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Third-Party Cookies
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We may use third-party cookies, such as those from analytics or
              advertising providers. These cookies are subject to the privacy
              policies of the respective third parties.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Changes to This Policy
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We may update this Policy from time to time to reflect changes in
              our practices or for other operational, legal, or regulatory
              reasons. Any changes will be posted on this page with a revised
              "Last Updated" date.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
