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
} from '@mui/material';
import { ContactBtn } from './common/ContactBtn';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 10,
  boxShadow: 24,
  p: 6,
};

const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  maxWidth: '300px',
  margin: '0 auto',
});

export const Crew = () => {
  const [showModal, setModal] = useState(false);
  const [activeCrewMember, setActiveCrewMember] = useState(null);

  const handleModal = (crewMember) => {
    setActiveCrewMember(crewMember);
    setModal((prev) => !prev);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Typography variant="h1" sx={{ mt: 30 }}>
          ChemDye, a studio where the worlds of art and science come together
        </Typography>
        <Typography variant="h4" sx={{ mt: 3 }}>
          As your trusted partner, our top priority is to collaborate closely
          with you, ensuring we create visuals that illustrate the story of your
          science.{' '}
        </Typography>
        <Grid item xs={9.5} sx={{ my: 10 }}>
          <Link to={`/contact`}>
            <ContactBtn title="Connect with us" />
          </Link>
        </Grid>
      </Grid>
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
                  title="green iguana"
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
                    sx={{ color: '#DF367B' }}
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
        >
          <Box sx={style}>
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
    </Grid>
  );
};

const crew = [
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550396/02.%20Team/00_Mari_foto_editada_290524_xts7li.jpg',
    title: 'Dr. Mariana Oksdath',
    subTitle: 'Founder | Visual scientist and Science communicator',
    info: 'I’m Mariana, an Argentinian living in Australia. With over a decade of experience as a researcher in academia and the privilege of working as a designer with prestigious names like Greenpeace, I have found my passion in creating visuals that revolutionise how we perceive science.The power of visuals to convey complex scientific concepts guides my mission. I approach every project with the rigour of a scientist and the creativity and innovation of an artist. My desire is for visual science communication to be widely recognised and appreciated.,',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550432/02.%20Team/04_Rebe_foto_editada_290524_pox47z.jpg',
    title: 'Rebeca Fernández Deandrea ',
    subTitle: 'Marketing Specialist and Project Manager',
    info: 'I graduated with degrees in Social Communication and Strategic Digital Marketing from a public university in Argentina. Throughout my professional journey, I have worked for various companies and organisations, and am currently venturing into the field of scientific communication.My mission is to apply tools that showcase everything ChemDye has to contribute to the field of science and improve teamwork processes to achieve every goal we set.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550411/02.%20Team/02_Sofi_foto_editada_290524_ogpjpr.jpg',
    title: 'Dra. Sofía Polcownuk',
    subTitle: 'Scientific illustrator and communicator',
    info: 'I hold a Ph.D. in Biology, with a background in neuroscience and a passion for wildlife ecology. I began my journey in scientific illustration and communication inspired by the landscapes, flora, and fauna of the Argentine Patagonia, my birthplace.I refine my artistic techniques daily by exploring and utilising various mediums, from watercolours to digital tools. Leveraging my skills in illustration and design, I aim to create creative works that celebrate the beauty and complexity of science.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550424/02.%20Team/03_David_foto_editada_290424_n4scds.jpg',
    title: 'David Rojas Márquez',
    subTitle: 'Natural Science Illustrator   ',
    info: 'Born in Colombia and raised in Argentina, my academic journey started with a Bachelor’s degree in genetics and a PhD in immunology. My scientific curiosity and desire to keep learning led me to enrol in a scientific illustration master where I discovered my true passion.My mission is to simplify intricate scientific concepts, utilising my expertise to craft clear and captivating visual representation bringing science closer to a broader audience.',
  },
  {
    photo:
      'https://res.cloudinary.com/dcvzsick7/image/upload/v1717550401/02.%20Team/01_Gaby_foto_editada_290524_j76ruz.jpg',
    title: 'Gabriela M. Thiery',
    subTitle: 'Senior sound and image designer',
    info: 'Hailing from Buenos Aires, Argentina, and boasting over two decades of professional experience across diverse fields in the Art industry, I have developed a high level of versatility in utilising tools such as motion graphics, stop motion, 2D and 3D animation, and illustration.I consider myself a self-taught individual who is passionate about creating from scratch, giving life, and materialising ideas by finding the unique narrative of each project. My goal is to apply my entire background to achieve pieces with their own personality and a visual power that makes a difference.',
  },
];
