import { createTypography } from './createTypography';
import { createPalette } from './createPalette';
import { createTheme } from '@mui/material/styles';

export const createDefaultTheme = () => {
  const typography = createTypography();
  const palette = createPalette();

  return createTheme({
    typography,
    palette,
  });
};
