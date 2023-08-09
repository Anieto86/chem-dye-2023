import { Toolbar, Typography, Grid, AppBar } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/Icons/02.CDLOGO_COLOUR.png';
import backgroundImg from '../../../assets/img/01.BG-IMAGE.jpg';
import { useLocation } from 'react-router-dom';

export function NavBar() {
  let location = useLocation();

  const links = ['Service', 'Work', 'About', 'Blog', 'Contact'];

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
                boxShadow: 'blur',
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
            sx={{ mx: 15, p: 1 }}
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
                      width: '10%',
                      height: 'auto',
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
                        color: location.pathname === '/' ? '#ffffff' : 'black',
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
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 30 }}
          >
            <Grid item xs={8}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 40,
                  fontWeight: 'bold',
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
