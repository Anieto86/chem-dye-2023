import { Typography, Grid } from '@mui/material';
import novaEye from '../../../assets/Icons/03.A_NOVAEYE.png';
import unisa from '../../../assets/Icons/03.B_UNISA.png';
import businessAndScience from '../../../assets/Icons/03.C_B&B.png';
import greenPeace from '../../../assets/Icons/03.D_GP.png';
import corticalLab from '../../../assets/Icons/03.E_CL.png';
import bioGenox from '../../../assets/Icons/03.F_BG.png';

export const Companies = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      // sx={{ p: 2 }}
    >
      <Grid item sx={{ my: 7 }}>
        <Typography>WHO WE'VE WORKED WITH?</Typography>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ marginLeft: '210px' }}
        spacing={4}
      >
        <Grid item xs={5}>
          <img
            src={novaEye}
            alt="Image 1"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>

        <Grid item xs={5}>
          <img
            src={unisa}
            alt="Image 2"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={5}>
          <img
            src={greenPeace}
            alt="Image 4"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>

        <Grid item xs={5}>
          <img
            src={bioGenox}
            alt="Image 6"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={5}>
          <img
            src={businessAndScience}
            alt="Image 3"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={5}>
          <img
            src={corticalLab}
            alt="Image 5"
            style={{ width: '30%', height: 'auto' }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
