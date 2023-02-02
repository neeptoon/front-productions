import { Counter } from "./components/Counter"
import './index.scss';
import {Route, Routes, Link} from 'react-router-dom';
import AboutPageAsync from './components/pages/AboutPage/AboutPageAsync';
import MainPageAsync from "./components/pages/MainPage/MainPageAsync";
import { Suspense } from "react";

const App = () => {
    return (
        <div className="app">
            <Link to={'/about'}>О сайте</Link>
            <Link to={'/'}>Главная страница</Link>
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
