import './styles/index.scss';
import {Route, Routes, Link} from 'react-router-dom';
import AboutPageAsync from './pages/AboutPage/AboutPageAsync';
import MainPageAsync from "./pages/MainPage/MainPageAsync";
import { Suspense} from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from './helpers/classNames/classNames';

enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

const App = () => {

    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', [theme], {})}>
            <Link to={'/about'}>О сайте</Link>
            <Link to={'/'}>Главная страница</Link>
            <button onClick={toggleTheme}>Change Theme</button>
            <Suspense fallback={<div>Грузится нахой.....</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;
