import Masonry from '@mui/lab/Masonry';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContactBtn } from './common/ContactBtn';

import { useState } from 'react';

const itemData = [
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554639/01.%20Portfolio/18_Image_18_dctbjp.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554389/01.%20Portfolio/SANGER_-_Infographic_wlugh4.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554215/01.%20Portfolio/17_Image_17_ypunpe.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717554177/01.%20Portfolio/MH_FIG_1_FINAL_Glycoform3_270224_doadul.png',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476859/01.%20Portfolio/16_Image_16_pqqxqu.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/14_Image_14_eglgyl.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/11_Image_11_lsbviu.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/13_Image_13_wn75kb.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476856/01.%20Portfolio/12_Image_12_lwketg.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476854/01.%20Portfolio/10_Image_10_wgyvyz.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476853/01.%20Portfolio/07_Image_07_j7mi7g.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/08_Image_08_yn9pw7.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/09_Image_09_l35783.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/06_Image_06_jxo6st.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476852/01.%20Portfolio/03_Image_03_urwuss.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/15_Image_15_ckdylm.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/05_Image_05_r0teyr.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476851/01.%20Portfolio/02_Image_02_d7mxcm.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476850/01.%20Portfolio/01_Image_01_uz94cn.jpg',
  },
  {
    img: 'https://res.cloudinary.com/dcvzsick7/image/upload/v1717476850/01.%20Portfolio/04_Image_04_haivrr.jpg',
  },
];

export function Work() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e, index) => {
    if (hoverIndex !== index) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTransform(`rotateY(${x / 10}deg) rotateX(${y / 30}deg)`);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
    setTransform('rotateY(0deg) rotateX(0deg)');
  };

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={10}>
        <Typography variant="h1" sx={{ mt: 30 }}>
          Our journey into creativity
        </Typography>
        <Typography variant="h4" sx={{ mt: 3 }}>
          ChemDye collaborates with scientists across diverse disciplines,
          driving innovation through creative solutions.
        </Typography>
        <Grid item xs={9.5} sx={{ my: 10 }}>
          <Link to={`/contact`}>
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Masonry columns={3} spacing={5}>
          {itemData.map((item, index) => (
            <Grid
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                transition: 'transform 0.2s ease-in-out',
                transform: hoverIndex === index ? transform : 'none',
                '&:hover': {
                  transform: hoverIndex === index ? 'scale(1.40)' : 'none',
                },
              }}
            >
              <Box style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <img
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: 4,
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    maxWidth: '100%',
                    transform: hoverIndex === index ? transform : 'none',
                    transition:
                      'transform 0.2s ease-in-out, scale 0.2s ease-in-out',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Masonry>
      </Grid>
    </Grid>
  );
}
