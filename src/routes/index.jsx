import { createBrowserRouter } from 'react-router-dom';
import { SmileyFace } from '../components/SmileyFace';
import ErrorPage from './ErrorPage';
import Root from '../routes/root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/SmileyFace',
        element: <SmileyFace />,
      },
    ],
  },
]);
