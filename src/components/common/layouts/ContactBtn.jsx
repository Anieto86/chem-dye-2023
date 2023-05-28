import { Button } from '@mui/material';

export const ContactBtn = ({ title }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: 'pink',
        color: 'white',
        marginBottom: 2,
        borderRadius: '10px',
      }}
    >
      {title}
    </Button>
  );
};
