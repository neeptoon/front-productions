import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
   const { theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <Sidebar>
                <ThemeSwitcher/>
            </Sidebar>
            <AppRouter/>

        </div>
    );
};

export default App;
