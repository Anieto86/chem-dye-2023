import { Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ContactBtn = ({ title, fSize = 20, onClickShow, ...props }) => {
  return (
    <Button
      variant="contained"
      onClick={onClickShow}
      sx={{
        backgroundColor: '#DF367C',
        color: 'white',
        marginBottom: 2,
        borderRadius: '50px',
        fontSize: fSize,
        p: 2,
      }}
      {...props}
    >
      {title}
    </Button>
  );
};
