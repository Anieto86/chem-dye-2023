import { createBrowserRouter } from 'react-router-dom';
// import { About } from '../components/About';
// import { Blog } from '../components/Blog';
import { Contact } from '../Pages/Contact';
import { Crew } from '../Pages/Crew';
import { Home } from '../Pages/Home';
import { Service } from '../Pages/Service';
import { Work } from '../Pages/Work';
import { Cookies } from '../components/common/Policies/Cookies';
import { Privacy } from '../components/common/Policies/Privacy';
import { Website } from '../components/common/Policies/Website';
import { CenteredLayout } from '../components/layouts/CenteredLayout';
import { ErrorPage } from './ErrorPage';

export const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <CenteredLayout />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/services',
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
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/policies/cookies',
          element: <Cookies />,
        },
        {
          path: '/policies/website',
          element: <Website />,
        },
        {
          path: '/policies/privacy',
          element: <Privacy />,
        },
        // {
        //   path: '/about',
        //   element: <About />,
        // },
        // {
        //   path: '/blog',
        //   element: <Blog />,
        // },
        // {
        //   path: '/blog/txt2',
        //   element: <Txtblog2 />,
        // },
        // {
        //   path: '/blog/txt3',
        //   element: <Txtblog3 />,
        // },
        // {
        //   path: '/blog/txt4',
        //   element: <Txtblog4 />,
        // },
      ],
    },
  ]);
};
