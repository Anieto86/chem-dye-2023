import { Typography, Grid } from '@mui/material';
import novaEye from '../../../assets/Icons/03.A_NOVAEYE.png';
import unisa from '../../../assets/Icons/03.B_UNISA.png';
import businessAndScience from '../../../assets/Icons/03.C_B&B.png';
import greenPeace from '../../../assets/Icons/03.D_GP.png';
import corticalLab from '../../../assets/Icons/03.E_CL.png';
import bioGenox from '../../../assets/Icons/03.F_BG.png';
import aero from '../../../assets/Icons/AERO.png';

const companiesLogos = [
  aero,
  novaEye,
  unisa,
  businessAndScience,
  greenPeace,
  corticalLab,
  bioGenox,
];

export const Companies = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item sx={{ my: 8 }}>
        <Typography variant="h2">
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

                border: 'solid red',
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
