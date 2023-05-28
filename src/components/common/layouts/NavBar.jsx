import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import logo from '../../../assets/Icons/02.CDLOGO_COLOUR.png';

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar sx={{ p: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink
              to={`/`}
              style={({ isPending }) => {
                return {
                  padding: 6,
                  textDecoration: 'none',
                  color: isPending ? 'red' : 'black',
                };
              }}
            >
              <img
                src={logo}
                alt="Image 1"
                style={{ width: '9%', height: 'auto' }}
              />
            </NavLink>
          </Typography>
          <NavLink
            to="/services"
            style={({ isActive, isPending }) => {
              return {
                border: isActive ? '1px solid #000000' : 'none',
                borderRadius: '10px',
                padding: 6,
                textDecoration: 'none',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            Service
          </NavLink>
          <NavLink
            to={`/work`}
            style={({ isActive, isPending }) => {
              return {
                border: isActive ? '1px solid #000000' : 'none',
                borderRadius: '10px',
                padding: 6,
                textDecoration: 'none',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            Work
          </NavLink>
          <NavLink
            to={`/about`}
            style={({ isActive, isPending }) => {
              return {
                border: isActive ? '1px solid #000000' : 'none',
                borderRadius: '10px',
                padding: 6,
                textDecoration: 'none',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            About
          </NavLink>
          <NavLink
            to={`/blog`}
            style={({ isActive, isPending }) => {
              return {
                border: isActive ? '1px solid #000000' : 'none',
                borderRadius: '10px',
                padding: 6,
                textDecoration: 'none',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            Blog
          </NavLink>
          <NavLink
            to={`/contact`}
            style={({ isActive, isPending }) => {
              return {
                border: isActive ? '1px solid #000000' : 'none',
                borderRadius: '10px',
                padding: 6,
                textDecoration: 'none',
                color: isPending ? 'red' : 'black',
              };
            }}
          >
            Contact
          </NavLink>
        </Toolbar>
      </AppBar>
      <Grid container direction="row" justifyContent="center" sx={{ p: 4 }}>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
