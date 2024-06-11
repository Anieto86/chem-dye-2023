/* eslint-disable react/no-unescaped-entities */
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
import { motion, useAnimation } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AnimatedTimelineItem = ({ children }) => {
  const controls = useAnimation();
  // const { scrollYProgress } = useScroll();

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

  // console.log(scrollYProgress.get());

  return (
    <motion.div
      // style={{ scaleX: scrollYProgress.get() }}
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
        }}
      />
      <Timeline position="alternate" id="timeline">
        {timelineItems.map((item, index) => (
          <AnimatedTimelineItem key={index}>
            <TimelineItem position={index % 2 === 0 ? 'right' : 'left'}>
              <TimelineSeparator>
                <TimelineDot sx={{ bgcolor: '#DF367B' }}>
                  <Avatar sx={{ bgcolor: '#DF367B' }}>{item.number}</Avatar>
                </TimelineDot>
                {index < timelineItems.length - 1 && (
                  <TimelineConnector sx={{ width: 6 }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
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
                    variant="h4"
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

const timelineItems = [
  {
    number: '1',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717735668/04.%20Services/Service-roadmap01_zdd3b3.png',
    title: 'Initial contact',
    text: 'Send us an email and tell us about your project! You can start by telling us who you are or which company you work for. Also, include all the details you consider important about the project you would like to work on together.',
  },
  {
    number: '2',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717737216/04.%20Services/Services-roadmap02_lknns6.png',
    title: "Let's get into details",
    text: "At this stage, we will meet to get on the same page and assess the project's needs in depth. We will team up to create ideas that suit your needs. After our initial conversation, you will receive a project proposal.",
  },
  {
    number: '3',
    image:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717737637/04.%20Services/Services-Roadmap_03_yoftee.png',
    title: "Let's get to work",
    text: "After collecting all the information, we'll put together an initial draft for your review. Your input is crucial in refining it until it perfectly aligns with your research needs. We agree on the number of revisions upfront, ensuring you always have a clear expectation of what to anticipate from us.",
  },
];
