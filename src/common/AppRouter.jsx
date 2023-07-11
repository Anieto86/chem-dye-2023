import { createBrowserRouter } from 'react-router-dom';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { Footer } from '../components/common/layouts/Footer';
import { NavBar } from '../components/common/layouts/NavBar';
import { ErrorPage } from './ErrorPage';
import { About } from '../components/About';
import { Blog } from '../components/Blog';
import Txtblog4 from '../components/common/Blogs/Txtblog4';
import { Txtblog1 } from '../components/common/Blogs/Txtblog1';
// import { Home } from '@mui/icons-material';

export const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          {/* <Home /> */}
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/Service',
          element: <Services />,
        },
        {
          path: '/Work',
          element: <Work />,
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Blog',
          element: <Blog />,
        },
        {
          path: '/Blog/txt4',
          element: <Txtblog4 />,
        },
        {
          path: '/Blog/txt1',
          element: <Txtblog1 />,
        },
      ],
    },
  ]);
};
