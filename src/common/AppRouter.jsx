import { Navigate, createBrowserRouter } from 'react-router-dom';
import { About } from '../components/About';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Work } from '../components/Work';
import {
  Txtblog1,
  Txtblog2,
  Txtblog3,
  Txtblog4,
} from '../components/common/Blogs';
import { Footer } from '../components/common/layouts/Footer';
import { NavBar } from '../components/common/layouts/NavBar';
import { ErrorPage } from './ErrorPage';
import { Service } from '../components/Service';
import { Crew } from '../components/Crew';

export const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/service',
          element: <Service />,
        },
        {
          path: '/work',
          element: <Work />,
        },
        {
          path: '/crew',
          element: <Crew />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/blog/txt1',
          element: <Txtblog1 />,
        },
        {
          path: '/blog/txt2',
          element: <Txtblog2 />,
        },
        {
          path: '/blog/txt3',
          element: <Txtblog3 />,
        },
        {
          path: '/blog/txt4',
          element: <Txtblog4 />,
        },
      ],
    },
  ]);
};
