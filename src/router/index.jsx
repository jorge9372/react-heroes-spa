import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';

import { LoginPage } from '../auth';
import { MarvelPage, DcPage, SearchPage, HeroesApp, HeroPage } from '../heroes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <HeroesApp />
            </PrivateRoute>
        ),
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
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ),
    },
]);

export const MyRoutes = () => <RouterProvider router={router} />;
