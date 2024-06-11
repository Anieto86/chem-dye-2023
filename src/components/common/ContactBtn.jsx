import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#DF367C',
  color: 'white',
  marginBottom: theme.spacing(2),
  borderRadius: '50px',
  fontSize: '12.558px',
  fontWeight: 700,
  lineHeight: '18.837px',
  padding: '13px 25px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#facd2d',
    color: '#010101',
  },
}));

// eslint-disable-next-line react/prop-types
export const ContactBtn = ({ title, fSize = 20, onClickShow, ...props }) => {
  return (
    <StyledButton
      variant="contained"
      onClick={onClickShow}
      sx={{
        fontSize: fSize,
      }}
      {...props}
    >
      {title}
    </StyledButton>
  );
};

//DD015C
