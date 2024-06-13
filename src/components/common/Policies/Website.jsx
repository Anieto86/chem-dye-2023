/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';

export const Website = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid container columns={12}>
          <Grid item xs={6}>
            <Typography variant="h1" sx={{ mt: 30 }}>
              About this website
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }}>
              Last Updated: 2023
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h2" sx={{ mt: 30 }}>
              Acceptance of Terms
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              By accessing and using the services provided by ChemDye Scientific
              Illustrations ("the Company," "we," "us," or "our"), you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website.
            </Typography>

            <Typography variant="h2" sx={{ mt: 10 }}>
              Definitions
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              "Client," "You," and "Your" refer to you, the person accessing the
              website or/and our services, and accepting these terms.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              "The Company," "Ourselves," "We," "Our," and "Us" refer to ChemDye
              Scientific Illustrations.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              "Services" refer to all products, services, and content provided
              by ChemDye Scientific Illustrations.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              "Parties" refer to both the Client and ourselves.
            </Typography>

            <Typography variant="h2" sx={{ mt: 10 }}>
              Use of Services
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              a. License: Unless otherwise stated, ChemDye Scientific
              Illustrations and/or its licensors own the intellectual property
              rights for all materials on our website. All rights are reserved.
              You may view and/or print pages from our website
              (https://www.chemdyeillustrations.com/) for your personal use,
              subject to restrictions set in these terms.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Restrictions: You must not:
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              • Republish material from our website.
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              • Sell, rent, or sublicense material from our website.
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              • Reproduce, duplicate, or copy material from our website.
            </Typography>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              • Redistribute content from ChemDye Scientific Illustrations
              (unless content is specifically made for redistribution).
            </Typography>

            <Typography variant="h2" sx={{ mt: 10 }}>
              Privacy Policy
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We respect your privacy and handle your personal information in
              accordance with our Privacy Policy, which is available on our
              website.
            </Typography>

            <Typography variant="h2" sx={{ mt: 10 }}>
              Limitation of Liability
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              To the maximum extent permitted by applicable law, ChemDye
              Scientific Illustrations excludes all representations, warranties,
              and conditions related to our website and services. We shall not
              be liable for any loss or damage of any nature.
            </Typography>

            <Typography variant="h2" sx={{ mt: 10 }}>
              Changes to Terms
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We reserve the right to amend these Terms of Service at any time.
              Any changes will be effective immediately upon posting on our
              website. It is your responsibility to review these terms
              periodically.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
