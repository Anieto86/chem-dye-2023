import { Height } from '@mui/icons-material';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';

export const RoadMap = () => {
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const container = document.getElementById('roadMapContainer');

    const handleScroll = () => {
      if (container) {
        const contentHeight = container?.scrollHeight; // alto del
        const scrollTop = window.scrollY - contentHeight;
        const progressValue = (scrollTop / contentHeight) * 100;

        setProgress(progressValue);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={4}
      id="roadMap"
    >
      <Grid item xs={4}>
        <Box textAlign="center">
          <Box sx={{ bgcolor: '#cfe8fc', width: 408, height: 299 }} />
          <Typography variant="h6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque odio
            libero quia at corporis, deleniti minus repudiandae dicta similique
            unde dolores magnam voluptas hic tempore adipisci corrupti
            cupiditate sapiente. Enim.a
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        {/* <Box

          sx={{
            display: 'flex',
            alignItems: 'center',
            outline: 'red solid 1px',
            height: '200vh',
          }}
        > */}
        <Box
          id="roadMapContainer"
          sx={{
            width: '100%',
            transform: 'rotate(90deg)',
          }}
        >
          <LinearProgress variant="determinate" value={progress} />
        </Box>
        {/* </Box> */}
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item textAlign="center">
            <Box sx={{ bgcolor: '#0c87eb', width: 408, height: 299 }} />
            <Typography variant="h6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              odio libero quia at corporis, deleniti minus repudiandae dicta
              similique unde dolores magnam voluptas hic tempore adipisci
              corrupti cupiditate sapiente. Enim.aAAAA
            </Typography>
          </Grid>
          <Grid
            item
            textAlign="center"
            sx={{
              height: '30vh',
            }}
          ></Grid>
          <Grid item textAlign="center">
            <Box sx={{ bgcolor: '#7cb639', width: 408, height: 299 }} />
            <Typography variant="h6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
              odio libero quia at corporis, deleniti minus repudiandae dicta
              similique unde dolores magnam voluptas hic tempore adipisci
              corrupti cupiditate sapiente. Enim.a
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
