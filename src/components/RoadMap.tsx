import * as React from 'react';
import {
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  Timeline,
} from '@mui/lab';

import { Avatar, Box, Grid, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { motion, useAnimation } from 'framer-motion';

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
    <Timeline position="alternate" id="timeline">
      <AnimatedTimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: deepOrange[500] }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>1</Avatar>
            </TimelineDot>

            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box sx={{ bgcolor: '#cfe8fc', width: 408, height: 299 }} />
            <Typography variant="h4" textAlign="center">
              Initial contact
            </Typography>
            <Typography textAlign="center">
              Send us an email and tell us about your project! You can start by
              telling us who you are or which company you work for. Also,
              include all the details you consider important about the project
              you would like to work on together.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: deepOrange[500] }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>2</Avatar>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container display={'flex'} justifyContent={'right'}>
              <Box sx={{ bgcolor: '#0877d3', width: 408, height: 299 }} />
            </Grid>
            <Typography variant="h6" component="span">
              Let's get into details
            </Typography>
            <Typography>
              At this stage, we will meet to get on the same page and assess the
              project's needs in depth. We will team up to create ideas that
              suit your needs. After our initial conversation, you will receive
              a project proposal.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: deepOrange[500] }}>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>3</Avatar>
            </TimelineDot>
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Box sx={{ bgcolor: '#cfe8fc', width: 408, height: 299 }} />
            <Typography variant="h6" component="span">
              Let's get to work
            </Typography>
            <Typography>
              After collecting all the information, we'll put together an
              initial draft for your review. Your input is crucial in refining
              it until it perfectly aligns with your research needs. We agree on
              the number of revisions upfront, ensuring you always have a clear
              expectation of what to anticipate from us.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </AnimatedTimelineItem>
    </Timeline>
  );
};
