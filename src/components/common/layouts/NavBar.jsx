import { Toolbar, Typography, Grid, AppBar } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/Icons/02.CDLOGO_COLOUR.png';
import backgroundImg from '../../../assets/img/01.BG-IMAGE.jpg';
import { useLocation } from 'react-router-dom';

export function NavBar() {
  let location = useLocation();

  const links = [
    'Home',
    'Services',
    'Work',
    // 'About',
    'Crew',
    // 'Blog',
    'Contact',
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={
          location.pathname === '/home'
            ? {
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 1000,
              }
            : {
                backgroundColor: 'white',
                boxShadow: 'none',
                position: 'fixed',
                zIndex: '1',
              }
        }
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <NavLink to={`/`}>
                <img
                  src={logo}
                  alt="Image 1"
                  style={{
                    height: 'auto',
                  }}
                />
              </NavLink>
            </Grid>
            <Grid
              item
              sx={{
                p: 1,
                borderRadius: 20,
                backgroundColor: '#fff',
                border: '1px solid #010101',
              }}
            >
              {links.map((link, i) => {
                return (
                  <NavLink
                    key={i}
                    to={`/${link.toLowerCase()}`}
                    style={({ isActive }) => {
                      return {
                        backgroundColor: !isActive ? 'transparent' : '#000000',
                        padding: 10,
                        margin: 15,
                        borderRadius: 40,
                        textDecoration: 'none',
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: 25,
                        color: isActive ? '#ffffff' : '#000000',
                      };
                    }}
                  >
                    {link}
                  </NavLink>
                );
              })}
            </Grid>
          </Grid>
        </Toolbar>
        {location.pathname === '/home' && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 30 }}
          >
            <Grid item xs={6}>
              <Typography
                variant="h1"
                sx={{
                  textAlign: 'center',
                }}
              >
                At ChemDye, we specialise in the art of transforming
                <span style={{ color: '#facd2d' }}> complex science </span>
                into compelling
                <span style={{ color: '#FACD2D' }}> visual experiences </span>
              </Typography>
            </Grid>
          </Grid>
        )}
      </AppBar>
      <Grid sx={{ pt: '150px' }}>
        <Outlet />
      </Grid>
    </>
  );
}
