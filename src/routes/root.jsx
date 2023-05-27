import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Outlet, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import { Footer } from '../components/common/layouts/Footer';

export default function Root() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to={`/`}>icon</NavLink>
            </Typography>
            <Button>
              <NavLink to={`/`}>Services</NavLink>
            </Button>
            <Button>
              <NavLink to={`/`}>Work</NavLink>
            </Button>
            <Button>
              <NavLink to={`/`}>About</NavLink>
            </Button>
            <Button>
              <NavLink to={`/`}>Blog</NavLink>
            </Button>
            <Button>
              <NavLink to={`/`}>Contact</NavLink>
            </Button>
            <Button>
              <NavLink to={`SmileyFace`}>SmileyFace</NavLink>
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container direction="row" justifyContent="center" sx={{ p: 4 }}>
          <Grid item>
            <Outlet />
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  );
}
