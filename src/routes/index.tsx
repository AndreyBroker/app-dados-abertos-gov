import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import React, { useEffect } from "react";
import MainLayout from "../components/mainLayout";
import Pages from "../pages";
import { ABOUT_PATH, CNES_TABLE_PATH, HOME_PATH } from "../config/routes";


const PageRoutes: React.FC = () => {

    const { CnesPage, HomePage, AboutPage } = Pages;

    const PublicRoutes = () => (
        <Routes>
            <Route path={HOME_PATH} element={<HomePage />} />
            <Route path={CNES_TABLE_PATH} element={<CnesPage />} />
            <Route path={ABOUT_PATH} element={<AboutPage />} />
        </Routes>
    );

    const AppRouteBody = () => (
        PublicRoutes()
    )


    return(
        <MainLayout>
            <AppRouteBody />
        </MainLayout>
    )
}

export default PageRoutes;