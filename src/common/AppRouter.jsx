import { createBrowserRouter } from 'react-router-dom';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { Footer } from '../components/common/layouts/Footer';
import { NavBar } from '../components/common/layouts/NavBar';
import { ErrorPage } from './ErrorPage';
import { About } from '../components/About';
import { Blog } from '../components/Blog';

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
          path: '/services',
          element: <Services />,
        },
        {
          path: '/work',
          element: <Work />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
      ],
    },
  ]);
};
