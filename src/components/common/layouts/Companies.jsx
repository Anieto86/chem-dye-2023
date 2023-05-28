import { Box, Typography, Grid } from '@mui/material';
import image1 from '../../../assets/img/1.jpg';

export const Companies = () => {
  return (
    <>
      <Typography>WHO WE’sVE WORK WITH?</Typography>
      <Box
        sx={{
          backgroundColor: '#F6F7F9',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <img
              src={image1}
              alt="Image 1"
              style={{ width: '25%', height: 'auto' }}
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </>
  );
};
