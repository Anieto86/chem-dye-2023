import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const socialLinks = [
  {
    url: 'https://www.instagram.com/chemdye_si/?hl=es',
    IconComponent: <InstagramIcon />,
  },
  {
    url: 'https://www.linkedin.com/in/mariana-oksdath-mansilla',
    IconComponent: <LinkedInIcon />,
  },
  {
    url: 'https://twitter.com/i/flow/login?redirect_after_login=%2FMari_SciArt',
    IconComponent: <XIcon />,
  },
];

export const LinkIcons = () => {
  return (
    <>
      {socialLinks.map((sl, index) => {
        return (
          <Link key={index} to={sl.url}>
            <IconButton
              sx={{
                color: '#ffffff',
                background: '#DF367B',
                mx: 1,
                '&:hover': {
                  background: '#facd2d ',
                  color: '#000000',
                },
              }}
            >
              {sl.IconComponent}
            </IconButton>
          </Link>
        );
      })}
    </>
  );
};
