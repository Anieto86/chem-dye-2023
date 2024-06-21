import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import * as React from 'react';
import { timelineItems } from '../../data/data';

// eslint-disable-next-line react/prop-types
const AnimatedTimelineItem = ({ children }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const timelineElement = document.getElementById('timeline');
      if (timelineElement) {
        const timelinePosition = timelineElement.getBoundingClientRect().top;
        if (scrollPosition > timelinePosition - window.innerHeight / 2) {
          controls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export const RoadMap = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h1" sx={{ textAlign: 'center', m: 10 }}>
          How is it to work with us?
        </Typography>
      </Grid>
      <Box
        component="img"
        src={
          'https://res.cloudinary.com/dcvzsick7/image/upload/v1718065033/04.%20Services/Flecha_fjarj6.png'
        }
        alt="arrow Image"
        sx={{
          width: '100%',
          height: 400,
          objectFit: 'contain',
          mb: 20,
        }}
      />
      <Timeline position="alternate" id="timeline">
        {timelineItems.map((item, index) => (
          <AnimatedTimelineItem key={index}>
            <TimelineItem position={index % 2 === 0 ? 'right' : 'left'}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: '#DF367B',
                    '&:hover': {
                      backgroundColor: '#facd2d',
                      border: '1px solid #facd2d',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      backgroundColor: 'inherit',
                      '&:hover': {
                        backgroundColor: 'inherit',
                        color: '#010101',
                        border: '1px solid #facd2d',
                      },
                    }}
                  >
                    {item.number}
                  </Avatar>
                </TimelineDot>
                {index < timelineItems.length - 1 && (
                  <TimelineConnector sx={{ width: 3, background: '#000000' }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ mt: '-200px' }}>
                <Box
                  component="img"
                  src={item.image}
                  alt="Example Image"
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'contain',
                  }}
                />
                <Typography variant="h2" textAlign="center">
                  {item.title}
                </Typography>
                <Box display="flex" justifyContent="center">
                  <Typography
                    textAlign="center"
                    variant="h5"
                    sx={{ width: '50%', mt: 5 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </AnimatedTimelineItem>
        ))}
      </Timeline>
    </>
  );
};
