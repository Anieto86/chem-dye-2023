import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
  Skeleton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { crew } from '../../data/data';
import { TitleHeader } from '../components/common/TitleHeader';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   borderRadius: 10,
//   boxShadow: 24,
//   p: 6,
// };

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  maxWidth: '300px',
  margin: '0 auto',
});

export const Crew = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [showModal, setModal] = useState(false);
  const [activeCrewMember, setActiveCrewMember] = useState(null);

  const handleModal = (crewMember) => {
    setActiveCrewMember(crewMember);
    setModal((prev) => !prev);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%', // Adjust width for small screens vs. medium/large screens
    maxWidth: isSmallScreen ? 'none' : 600, // Limit max width on medium/large screens  width: isSmallScreen ? '70%' : '70%', // Adjust width based on screen size
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  return (
    <>
      <TitleHeader
        title="ChemDye, a studio where the worlds of art and science come together"
        subTitle="  As your trusted partner, our top priority is to collaborate closely
          with you, ensuring we create visuals that illustrate the story of your
          science."
      />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        spacing={5}
        sx={{ p: 4 }}
      >
        {crew.map((c) => {
          const { title, subTitle, photo } = c;
          return c ? (
            <Grid item key={c.title}>
              <StyledCard
                sx={{
                  boxShadow: 'none',
                  width: '100%',
                  maxWidth: 400,
                  margin: '0 auto',
                }}
              >
                <CardMedia
                  component="img"
                  image={`${photo}?w=162&auto=format`}
                  srcSet={`${photo}?w=162&auto=format&dpr=1 1x, ${photo}?w=324&auto=format&dpr=2 2x`}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  title={title}
                  loading="lazy"
                />
                <CardContent sx={{ width: '100%' }}>
                  <Typography gutterBottom variant="h3">
                    {title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {subTitle}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', width: '100%' }}>
                  <Button
                    size="small"
                    onClick={() => handleModal(c)}
                    color="primary"
                  >
                    Read More
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          );
        })}

        <Modal
          open={showModal}
          onClose={() => handleModal(null)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          keepMounted
        >
          <Box sx={modalStyle}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
              {activeCrewMember?.title}
            </Typography>
            <Typography id="modal-modal-subtitle" variant="h6">
              {activeCrewMember?.subTitle}
            </Typography>
            <Typography
              id="modal-modal-description"
              variant="h5"
              sx={{ mt: 2 }}
            >
              {activeCrewMember?.info}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </>
  );
};
