import { createBrowserRouter } from 'react-router-dom';
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
          {/* <Home />, */}
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/Service',
          element: <Service />,
        },
        {
          path: '/Work',
          element: <Work />,
        },
        {
          path: '/Crew',
          element: <Crew />,
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
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Blog/txt1',
          element: <Txtblog1 />,
        },
        {
          path: '/Blog/txt2',
          element: <Txtblog2 />,
        },
        {
          path: '/Blog/txt3',
          element: <Txtblog3 />,
        },
        {
          path: '/Blog/txt4',
          element: <Txtblog4 />,
        },
      ],
    },
  ]);
};
