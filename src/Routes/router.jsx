import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home';
import SignUp from '../pages/signup';
import Login from '../pages/login';
import ServiceDetails from '../pages/service-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signUp',
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
      },
    ],
  },
]);

export default router;
