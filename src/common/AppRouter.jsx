import { createBrowserRouter } from 'react-router-dom';
import { Services } from '../components/Services';
import { Work } from '../components/Work';
import { Footer } from '../components/common/layouts/Footer';
import { NavBar } from '../components/common/layouts/NavBar';
import { ErrorPage } from './ErrorPage';
import { About } from '../components/About';
import { Blog } from '../components/Blog';
// import { Home } from '../components/Home';

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
      ],
    },
  ]);
};
