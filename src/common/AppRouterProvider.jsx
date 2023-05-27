import { RouterProvider } from 'react-router';
import { AppRouter } from './AppRouter';

export const AppRouterProvider = () => {
  return <RouterProvider router={AppRouter()} />;
};
