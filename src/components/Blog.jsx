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
    title:
      'Learn how to create a killing Graphical Abstract in only five steps ',
    img: img1,
    subTitle:
      'A Graphical Abstract is the opportunity to boost your research, make your data shine',
    link: 'txt1',
  },
  {
    title:
      'Are you a scientist? Learn how to master social networks with our tips',
    img: img2,
    subTitle:
      'Social networks are the best link to close the gap between scientists and society',
    link: 'txt2',
  },
  {
    title: 'Scientific illustrators, making the message louder',
    img: img3,
    subTitle:
      'Scientific illustrators translate complex data into compelling scientific stories',
    link: 'txt3',
  },
  {
    title: 'Thinking outside the box',
    img: Img4,
    subTitle: 'Moving from the comfort zone to the unknown',
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
                <Typography variant="h6"> {x.title}</Typography>
                <Typography variant="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt atque nam nisi ratione eveniet! Sapiente voluptate
                  cum in, quod eaque totam ratione neque laborum blanditiis
                  voluptates accusamus mollitia, beatae distinctio.
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
