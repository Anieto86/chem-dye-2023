import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  borderRadius: '50px',
  fontSize: '12.558px',
  fontWeight: 700,
  lineHeight: '18.837px',
  padding: '13px 25px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
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
