import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ContactBtn = ({ title, onClickShow }) => {
  return (
    <Button
      variant="contained"
      onClick={onClickShow}
      sx={{
        backgroundColor: '#DF367C',
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
