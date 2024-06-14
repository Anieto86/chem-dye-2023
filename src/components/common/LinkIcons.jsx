import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/data.jsx';

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
              {sl.icon}
            </IconButton>
          </Link>
        );
      })}
    </>
  );
};
