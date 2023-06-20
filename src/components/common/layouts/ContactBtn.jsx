import { Button } from '@mui/material';

export const ContactBtn = ({ title }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#ff6f80',
        color: 'white',
        marginBottom: 2,
        borderRadius: '15px',
        fontWeight: '600',
      }}
    >
      {title}
    </Button>
  );
};
