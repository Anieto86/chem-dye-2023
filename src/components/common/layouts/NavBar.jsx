import { Box, Toolbar, Typography, Grid, AppBar } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/Icons/02.CDLOGO_COLOUR.png';
import backgroundImg from '../../../assets/img/01.BG-IMAGE.jpg';
import { useLocation } from 'react-router-dom';

export function NavBar() {
  let location = useLocation();
  console.log(location.pathname === '/');

  const links = ['Service', 'Work', 'About', 'Blog', 'Contact'];

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <AppBar
          position="static"
          sx={
            location.pathname === '/'
              ? {
                  p: 2,
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  height: 1000,
                }
              : { backgroundColor: 'transparent', boxShadow: 'none', my: 3 }
          }
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              wrap="nowrap"
            >
              <Grid item>
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
                      style={{
                        width: '12%',
                        height: 'auto',
                        // filter: 'invert(100%) ',
                      }}
                    />
                  </NavLink>
                </Typography>
              </Grid>
              <Grid item>
                {links.map((link, i) => {
                  return (
                    <NavLink
                      key={i}
                      to={`/${link}`}
                      style={({ isActive }) => {
                        return {
                          border: isActive ? '1px solid #000000' : 'none',
                          borderRadius: '10px',
                          padding: 6,
                          textDecoration: 'none',
                          fontFamily: "'Quicksand', sans-serif",
                          fontSize: 20,
                          color:
                            location.pathname === '/' ? '#ffffff' : 'black',
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
          {location.pathname === '/' && (
            <Typography
              variant="body1"
              color="initial"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
                fontSize: 40,
                fontWeight: 'bold',
                maxWidth: '80%',
              }}
            >
              Transforming Complex Science into Compelling
              <span style={{ color: '#ff6f80' }}>
                {' '}
                Visual Experiences: Scientific Illustration, Animation, and 3D
                Solutions{' '}
              </span>
              for the Healthcare, Pharma, and Biotech Industries
            </Typography>
          )}
        </AppBar>
      </Box>
      <Grid container direction="row" justifyContent="center" sx={{ p: 4 }}>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
