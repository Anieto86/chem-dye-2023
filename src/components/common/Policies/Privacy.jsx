/* eslint-disable react/no-unescaped-entities */
import { Grid, Typography } from '@mui/material';

export const Privacy = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Grid container columns={12}>
          <Grid item xs={6}>
            <Typography variant="h1" item xs={6} sx={{ mt: 30 }}>
              Privacy Policy
            </Typography>
            <Typography variant="h6" sx={{ mt: 3 }}>
              Last Updated: 2023
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ mt: 30 }}>
              ChemDye Scientific Illustrations is committed to providing quality
              services to you, and this policy outlines our ongoing obligations
              to you regarding how we manage your Personal Information.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We have adopted the Australian Privacy Principles (APPs) contained
              in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern
              the way in which we collect, use, disclose, store, secure and
              dispose of your Personal Information.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              A copy of the Australian Privacy Principles may be obtained from
              the website of The Office of the Australian Information
              Commissioner at www.aoic.gov.au
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              What is Personal Information and why do we collect it?
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Personal Information is information or an opinion that identifies
              an individual. Examples of Personal Information we collect
              include: names, addresses, email addresses, phone and facsimile
              numbers.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              This Personal Information is obtained in many ways including
              interviews, by email, via our website
              www.chemdyeillustrations.com, from other publicly available
              sources, and from third parties. We don’t guarantee website links
              or policy of authorised third parties.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              We collect your Personal Information for the primary purpose of
              providing our services to you, providing information to our
              clients and marketing. We may also use your Personal Information
              for secondary purposes closely related to the primary purpose, in
              circumstances where you would reasonably expect such use or
              disclosure. You may unsubscribe from our mailing/marketing lists
              at any time by contacting us in writing.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              When we collect Personal Information we will, where appropriate
              and where possible, explain to you why we are collecting the
              information and how we plan to use it.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Sensitive Information
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Sensitive information is defined in the Privacy Act to include
              information or opinion about such things as an individual's racial
              or ethnic origin, political opinions, membership of a political
              association, religious or philosophical beliefs, membership of a
              trade union or other professional body, criminal record or health
              information.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Sensitive information will be used by us only:
            </Typography>
            <Typography variant="h5" sx={{ mt: 3, ml: 2 }}>
              • For the primary purpose for which it was obtained
            </Typography>
            <Typography variant="h5" sx={{ mt: 3, ml: 2 }}>
              • For a secondary purpose that is directly related to the primary
              purpose.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3, ml: 2 }}>
              • With your consent; or where required or authorised by law.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Third Parties
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Where reasonable and practicable to do so, we will collect your
              Personal Information only from you. However, in some circumstances
              we may be provided with information by third parties. In such a
              case we will take reasonable steps to ensure that you are made
              aware of the information provided to us by the third party.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Disclosure of Personal Information
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Your Personal Information may be disclosed in a number of
              circumstances including the following:
            </Typography>
            <Typography variant="h5" sx={{ mt: 3, ml: 2 }}>
              • Third parties where you consent to the use or disclosure; and
            </Typography>
            <Typography variant="h5" sx={{ mt: 3, ml: 2 }}>
              • Where required or authorised by law.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Security of Personal Information
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              Your Personal Information is stored in a manner that reasonably
              protects it from misuse and loss and from unauthorized access,
              modification or disclosure.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              When your Personal Information is no longer needed for the purpose
              for which it was obtained, we will take reasonable steps to
              destroy or permanently de-identify your Personal Information.
              However, most of the Personal Information is or will be stored in
              client files which will be kept by us for a minimum of 7 years.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Access to your Personal Information
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              You may access the Personal Information we hold about you and to
              update and/or correct it, subject to certain exceptions. If you
              wish to access your Personal Information, please contact us in
              writing.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              ChemDye Scientific Illustrations will not charge any fee for your
              access request, but may charge an administrative fee for providing
              a copy of your Personal Information.
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              In order to protect your Personal Information we may require
              identification from you before releasing the requested
              information.
            </Typography>
            <Typography variant="h2" item xs={6} sx={{ mt: 10 }}>
              Maintaining the Quality of your Personal Information
            </Typography>
            <Typography variant="h5" sx={{ mt: 3 }}>
              It is an important to us that your Personal Information is up to
              date. We will take reasonable steps to make sure that your
              Personal Information is accurate, complete and up-to-date. If you
              find that the information we have is not up to date or is
              inaccurate, please advise us as soon as practicable so we can
              update our records and ensure we can continue to provide quality
              services to you.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
