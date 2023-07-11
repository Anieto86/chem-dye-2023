import { Grid, Typography } from '@mui/material';
import { ContactBtn } from '../components/common/layouts/ContactBtn';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/imgBlog/Img1.jpg';
import img2 from '../assets/imgBlog/Img2.png';
import img3 from '../assets/imgBlog/Img3.png';
import Img4 from '../assets/imgBlog/Img4.jpg';

const blogs = [
  {
    title: 'Embracing Transformation: A Journey from Comfort to the Unknown',
    img: img1,
    subTitle:
      "This post explores transitioning from a comfortable career to the unknown, highlighting career changes' increasing prevalence and benefits. It emphasises self-reflection, curiosity, connecting with resources and like-minded individuals, and embracing hard work. Understanding one's professional identity and seeking an aligned environment is crucial. The post underscores exploring new possibilities, leveraging unique skills, and prioritising self-care. Patience, reflection, goal-setting, and self-care are essential throughout the career transformation process.",
    link: 'txt1',
  },
  {
    title: 'Scientific Illustrators: Amplifying the Message',
    img: img2,
    subTitle:
      'This post explores the role of scientific illustrators in science communication, highlighting their ability to translate complex concepts into captivating visuals. It emphasises diverse paths in the field and the importance of utilising their services. In-house scientific illustrators are recommended to enhance science communication.',
    link: 'txt2',
  },
  // {
  //   title: 'Scientific illustrators, making the message louder',
  //   img: img3,
  //   subTitle:
  //     'Social networks are the best link to close the gap between scientists and society',
  //   link: 'txt3',
  // },
  {
    title:
      'Mastering the Art of Creating Impactful Graphical Abstracts in Five Simple Steps',
    img: Img4,
    subTitle:
      "Create impactful graphical abstracts in 5 steps: keep it simple, sketch results, use colours effectively, embrace digital illustration, and prioritise aesthetics. Elevate your research's visibility and captivate the scientific community.",
    link: 'txt4',
  },
];

export const Blog = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item xs={12} sx={{ m: 3 }}>
        <Typography variant="h3" fontWeight={600}>
          Join Our <span style={{ color: '#DF367C' }}>Newsletter </span>for
          Expert Tips
          <br />
          and Inspiring Insights in Scientific <br />
          <span style={{ color: '#DF367C' }}>Visualization and Design</span>
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ m: 3 }}>
        <ContactBtn title="Join Us" />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        wrap="wrap"
        spacing={5}
      >
        {blogs.map((x, i) => {
          return (
            <React.Fragment key={i} s>
              <Grid item xs={3}>
                <img
                  src={x.img}
                  alt="Image 1"
                  style={{ width: '80%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" sx={{ fontWeight: 600 }} gutterBottom>
                  {x.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {x.subTitle}
                </Typography>
                <Grid item>
                  <Link to={`/Blog/${x.link}`}>
                    <Button>Read More</Button>
                  </Link>
                </Grid>
              </Grid>
            </React.Fragment>
          );
        })}
      </Grid>
    </Grid>
  );
};
