import { Navigate, createBrowserRouter } from 'react-router-dom';
// import { About } from '../components/About';
// import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Work } from '../components/Work';
import { Footer } from '../components/common/layouts/Footer';
import { NavBar } from '../components/common/layouts/NavBar';
import { ErrorPage } from './ErrorPage';
import { Service } from '../components/Service';
import { Crew } from '../components/Crew';
import ScrollToTop from './Hook/scrollTop';
import { Cookies } from '../components/common/Policies/Cookies';
import { Website } from '../components/common/Policies/Website';
import { Privacy } from '../components/common/Policies/Privacy';

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
          element: (
            <>
              <ScrollToTop />
              <Navigate to="/home" />
            </>
          ),
        },
        {
          path: '/home',
          element: (
            <>
              <ScrollToTop /> <Home />
            </>
          ),
        },
        {
          path: '/services',
          element: (
            <>
              <ScrollToTop /> <Service />
            </>
          ),
        },
        {
          path: '/work',
          element: (
            <>
              <ScrollToTop />
              <Work />
            </>
          ),
        },
        {
          path: '/crew',
          element: (
            <>
              <ScrollToTop />
              <Crew />
            </>
          ),
        },
        {
          path: '/contact',
          element: (
            <>
              <ScrollToTop />
              <Contact />,
            </>
          ),
        },
        {
          path: '/policies/cookies',
          element: (
            <>
              <ScrollToTop />
              <Cookies />
            </>
          ),
        },
        {
          path: '/policies/website',
          element: (
            <>
              <ScrollToTop />
              <Website />
            </>
          ),
        },
        {
          path: '/policies/privacy',
          element: (
            <>
              <ScrollToTop />
              <Privacy />
            </>
          ),
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
