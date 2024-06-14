import Masonry from '@mui/lab/Masonry';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContactBtn } from './common/ContactBtn';
import { portfolios } from '../data/data';

import { useState } from 'react';

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
          {portfolios.map((portfolio, index) => (
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
                  src={`${portfolio.img}?w=162&auto=format`}
                  srcSet={`${portfolio.img}?w=162&auto=format&dpr=2 2x`}
                  alt={portfolio.title}
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
