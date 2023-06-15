import Masonry from '@mui/lab/Masonry';
import { Box, Button, Grid } from '@mui/material';
import image1 from '../assets/img/1.jpg';
import image10 from '../assets/img/10.jpg';
import image11 from '../assets/img/11.jpg';
import image12 from '../assets/img/12.jpg';
import image13 from '../assets/img/13.jpg';
import image14 from '../assets/img/14.jpg';
import image15 from '../assets/img/15.jpg';
import image2 from '../assets/img/2.jpg';
import image3 from '../assets/img/3.jpg';
import image4 from '../assets/img/4.jpg';
import image5 from '../assets/img/5.jpg';
import image6 from '../assets/img/6.jpg';
import image7 from '../assets/img/7.jpg';
import image8 from '../assets/img/8.jpg';
import image9 from '../assets/img/9.jpg';

export function Work() {
  return (
    <Box sx={{ width: 1000, minHeight: 829 }}>
      <Grid item xs={16}>
        <h1>
          We provide solutions for the Healthcare, Pharma and Biotech
          Industries.
        </h1>
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'white',
          marginBottom: 2,
        }}
      >
        Connect with us
      </Button>
      <Masonry columns={3} spacing={1}>
        {itemData.map((item, index) => (
          <div key={index}>
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
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

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
];
