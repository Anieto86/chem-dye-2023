import { createTypography } from './createTypography';
import { createPalette } from './createPalette';
import { createTheme } from '@mui/material';

export const createDefaultTheme = () => {
  const typography = createTypography();
  const palette = createPalette();

  console.log(palette);
  return createTheme({
    typography,
    palette,
  });
};
