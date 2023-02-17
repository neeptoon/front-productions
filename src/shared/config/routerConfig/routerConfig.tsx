import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

type Pages = 'MAIN' | 'ABOUT' | 'NOTFOUND';

type RoutesType = Record<Pages, string>

const Routes: RoutesType = {
    MAIN: '/',
    ABOUT: '/about',
    NOTFOUND: '*',
};

export const routerConfig: Record<Pages, RouteProps> = {
    MAIN: {
        element: <MainPage />,
        path: Routes.MAIN,
    },
    ABOUT: {
        element: <AboutPage />,
        path: Routes.ABOUT,
    },
    NOTFOUND: {
        element: <NotFoundPage/>,
        path: Routes.NOTFOUND
    }

};
