import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ContactBtn = ({ title, fSize = 20 }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#DF367C',
        color: 'white',
        marginBottom: 2,
        borderRadius: '15px',
        fontWeight: '600',
        fontSize: fSize,
      }}
    >
      {title}
    </Button>
  );
};
