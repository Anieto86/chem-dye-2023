import Masonry from '@mui/lab/Masonry';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ContactBtn } from './common/ContactBtn';
import { imageUrls } from '../../data/data';

export function Work() {
  const urlImgOrganize = imageUrls.sort((a, b) => a.number - b.number);

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
        <Masonry columns={3}>
          {urlImgOrganize.map((portfolio, index) => (
            <Grid
              key={index}
              sx={{
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.4)',
                },
              }}
            >
              <Box style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <img
                  src={`${portfolio.url}?w=162&auto=format`}
                  srcSet={`${portfolio.url}?w=162&auto=format&dpr=2 2x`}
                  alt={portfolio.description}
                  loading="lazy"
                  style={{
                    border: '0.7px #616161 solid',
                    borderRadius: 10,
                    width: '99%',
                    height: 'auto',
                    transition: 'transform 0.2s ease-in-out',
                    backgroundColor: '#ffffff',
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
