import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home';
import SignUp from '../pages/signup';

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
    ],
  },
]);

export default router;
