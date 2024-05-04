import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home';
import SignUp from '../pages/signup';
import Login from '../pages/login';
import ServiceDetails from '../pages/service-details';
import CheckOut from '../pages/checkout';
import Bookings from '../pages/bookings';

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
        path: '/my-bookings',
        element: <Bookings />,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/checkout/:id',
        element: <CheckOut />,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
