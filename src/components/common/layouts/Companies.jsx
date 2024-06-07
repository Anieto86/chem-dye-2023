import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

// Lista de logos de empresas
const companiesLogos = [
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551349/03.%20Icons/0._AERO_cc6m3s.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551347/03.%20Icons/6._Biogenox_j1ws6l.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551346/03.%20Icons/5._CorticalLab_dkz7au.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/4._GP_y2fc38.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/3._BDLS_qf5dkl.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/2._UniSA_oqlukz.png',
  'https://res.cloudinary.com/dcvzsick7/image/upload/v1717551343/03.%20Icons/1._NovaEye_uouutm.png',
];

// Duplicar los logos para crear el efecto de cadena infinita
const extendedLogos = [...companiesLogos, ...companiesLogos, ...companiesLogos];

const Companies = () => {
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

export default Companies;
