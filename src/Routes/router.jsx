import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from '../pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
