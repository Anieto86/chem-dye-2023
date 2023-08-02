import Masonry from '@mui/lab/Masonry';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/img/1.jpg';
import image10 from '../assets/img/10.jpg';
import image11 from '../assets/img/11.jpg';
import image12 from '../assets/img/12.jpg';
import image13 from '../assets/img/13.jpg';
import image14 from '../assets/img/14.jpg';
import image15 from '../assets/img/15.jpg';
import image16 from '../assets/img/16.jpg';
import image2 from '../assets/img/2.jpg';
import image3 from '../assets/img/3.jpg';
import image4 from '../assets/img/4.jpg';
import image5 from '../assets/img/5.jpg';
import image6 from '../assets/img/6.jpg';
import image7 from '../assets/img/7.jpg';
import image8 from '../assets/img/8.jpg';
import image9 from '../assets/img/9.jpg';
import { ContactBtn } from './common/ContactBtn';

const itemData = [
  {
    img: image1,
    // title: 'Fern',
  },
  {
    img: image2,
    // title: 'Snacks',
  },
  {
    img: image3,
    // title: 'Mushrooms',
  },
  {
    img: image4,
    // title: 'Tower',
  },
  {
    img: image5,
    // title: 'Sea star',
  },
  {
    img: image6,
    // title: 'Honey',
  },
  {
    img: image7,
    // title: 'Basketball',
  },
  {
    img: image8,
    // title: 'Breakfast',
  },
  {
    img: image9,
    // title: 'Tree',
  },
  {
    img: image10,
    // title: 'Burger',
  },
  {
    img: image11,
    // title: 'Camera',
  },
  {
    img: image12,
    // title: 'Coffee',
  },
  {
    img: image13,
    // title: 'Camping Car',
  },
  {
    img: image14,
    // title: 'Hats',
  },
  {
    img: image15,
    // title: 'Tomato basil',
  },
  {
    img: image16,
    // title: 'Tomato basil',
  },
];

export function Work() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={10}>
        <Typography variant="h2" fontWeight={600}>
          We provide solutions for the Healthcare,
        </Typography>
        <Typography variant="h2" fontWeight={600}>
          Pharma and Biotech Industries.
        </Typography>
        <Grid item sx={{ my: 8 }}>
          <Link
            target="_blank"
            to={`https://us21.list-manage.com/contact-form?u=d18dcd67615ab44686e887477&form_id=614480122771aa21de77d4b637966f22`}
          >
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Masonry columns={4} spacing={3}>
          {itemData.map((item, index) => (
            <Grid
              key={index}
              sx={{
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.5)',
                },
              }}
            >
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                }}
              />
            </Grid>
          ))}
        </Masonry>
      </Grid>
    </Grid>
  );
}
