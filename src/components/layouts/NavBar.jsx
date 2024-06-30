import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../src/assets/Icons/02.CDLOGO_COLOUR.png';
import backgroundImg from '../../../src/assets/img/01.BG-IMAGE.jpg';
import { useTheme } from '@emotion/react';

export function NavBar() {
  const location = useLocation();
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    'Home',
    'Services',
    'Work',
    // 'About',
    'Crew',
    // 'Blog',
    'Contact',
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={
          location.pathname === '/'
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
                    height: isMdDown ? '80px' : 'auto',
                    width: 'auto',
                  }}
                />
              </NavLink>
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: 'none', md: 'flex' },
                borderRadius: 20,
                backgroundColor: '#fff',
                border: '1px solid #010101',
              }}
            >
              {links.map((link, i) => (
                <NavLink
                  key={i}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  style={({ isActive }) => ({
                    backgroundColor: !isActive ? 'transparent' : '#000000',
                    color: isActive ? '#ffffff' : '#000000',
                    padding: '10px 20px 10px 20px',
                    margin: 15,
                    borderRadius: 20,
                    textDecoration: 'none',
                    fontFamily: "'Poppins', sans-serif",
                  })}
                >
                  {link}
                </NavLink>
              ))}
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                edge="start"
                color="black"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                  {links.map((link, i) => (
                    <ListItem key={i} onClick={handleDrawerToggle}>
                      <NavLink
                        to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                        style={{
                          textDecoration: 'none',
                          color: 'black',
                          width: '100%',
                        }}
                      >
                        <ListItemText primary={link} />
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Grid>
          </Grid>
        </Toolbar>
        {location.pathname === '/' && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 20, p: 2 }}
          >
            <Grid item xs={12} sm={8} md={6}>
              <Typography
                variant={isMdDown ? 'h2' : 'h1'}
                sx={{
                  textAlign: 'center',
                }}
              >
                At ChemDye, we specialise in the art of transforming{' '}
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  complex science{' '}
                </Box>
                into compelling{' '}
                <Box component="span" sx={{ color: 'secondary.main' }}>
                  {' '}
                  visual experiences{' '}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        )}
      </AppBar>
    </>
  );
}
