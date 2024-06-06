import { Typography, Grid } from '@mui/material';

const companiesLogos = [
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551349/03.%20Icons/0._AERO_cc6m3s.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551347/03.%20Icons/6._Biogenox_j1ws6l.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551346/03.%20Icons/5._CorticalLab_dkz7au.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/4._GP_y2fc38.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/3._BDLS_qf5dkl.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/2._UniSA_oqlukz.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/1._NovaEye_uouutm.png',
];

export const Companies = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item sx={{ my: 8 }}>
        <Typography variant="h1">
          Some of the clients we have worked with
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="baseline"
        spacing={2}
        sx={{ mb: 10 }}
      >
        {companiesLogos.map((logo, i) => {
          return (
            <Grid
              key={i}
              item
              xs={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={logo}
                alt={`company${logo}`}
                style={{ width: '40%', height: '40%' }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
