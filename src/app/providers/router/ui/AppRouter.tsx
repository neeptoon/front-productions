import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routerConfig/routerConfig";

export function AppRouter() {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({element, path}) => <Route key={path} path={path} element={
                <div className="page-wrapper">
                    {element}
                </div>}/>)}
            </Routes>
        </Suspense>
    )
}
