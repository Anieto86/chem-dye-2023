import Masonry from '@mui/lab/Masonry';
import { Box, Grid } from '@mui/material';
import { imageUrls } from '../../data/data';
import { TitleHeader } from '../components/common/TitleHeader';

export function Work() {
  const urlImgOrganize = imageUrls.sort((a, b) => a.number - b.number);

  return (
    <>
      <TitleHeader
        title="Our journey into creativity"
        subTitle="ChemDye collaborates with scientists across diverse disciplines, driving innovation through creative solutions."
      />

      <Masonry columns={{ xs: 1, md: 3, sm: 2 }}>
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
    </>
  );
}
