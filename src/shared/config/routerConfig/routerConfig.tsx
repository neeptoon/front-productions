import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

type Pages = 'MAIN' | 'ABOUT';

type RoutesType = Record<Pages, string>;

const Routes: RoutesType = {
    MAIN: '/',
    ABOUT: '/about'
}

export const routerConfig: Record<Pages, RouteProps> = {
    MAIN: {
        element: <MainPage />,
        path: Routes.MAIN
    },
    ABOUT: {
        element: <AboutPage/>,
        path: Routes.ABOUT
    },
}
