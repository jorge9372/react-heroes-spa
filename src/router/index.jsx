import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

import { LoginPage } from '../auth';
import { MarvelPage, DcPage, SearchPage, HeroesApp, HeroPage } from '../heroes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            {
                path: 'marvel',
                element: <MarvelPage />,
            },
            {
                path: 'dc',
                element: <DcPage />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: 'hero/:id',
                element: <HeroPage />,
            },
            {
                path: '/*',
                element: <Navigate to="/marvel" />,
            },
        ],
    },
    {
        path: 'login',
        element: <LoginPage />,
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
