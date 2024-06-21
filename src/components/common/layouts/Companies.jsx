import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { companiesLogos } from '../../../../data/data';

// Duplicar los logos para crear el efecto de cadena infinita
const extendedLogos = [...companiesLogos, ...companiesLogos, ...companiesLogos];

export const Companies = () => {
  const x = useMotionValue(0);
  const containerWidth = 150; // Ajusta el ancho de los logos
  const totalWidth = containerWidth * extendedLogos.length; // Ancho total del carrusel

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          duration: 20, // Ajusta la duración según sea necesario
          ease: 'linear',
        },
      },
    });
  }, [controls, totalWidth]);

  return (
    <Box sx={{ my: 8, textAlign: 'center' }}>
      <Typography variant="h1" sx={{ mb: 15 }}>
        Some of the clients we have worked with
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            display: 'flex',
            willChange: 'transform',
            x,
          }}
          animate={controls}
        >
          {extendedLogos.map((logo, index) => (
            <Box key={index} sx={{ minWidth: containerWidth, mx: 2 }}>
              <motion.img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
};
