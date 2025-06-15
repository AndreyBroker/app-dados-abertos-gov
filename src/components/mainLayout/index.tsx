import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ABOUT_PATH, CNES_TABLE_PATH, HOME_PATH } from "../../config/routes";
import BasicMenu from "./components/menu";
import { Box, useMediaQuery } from "@mui/material";


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleLogoClicked = () => {
        navigate(HOME_PATH);
    }

    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const AppHeader = () => (
        <header className="appNavBar" >
            <span onClick={handleLogoClicked} className="mainName appNavLogo">Dados abertos</span>
            <div className="navlinks">
                <BasicMenu />
            </div>
        </header>
    );

    const CurrentBreadCrumb: React.FC = () => {
        const path = location.pathname;
        switch(path){
            case CNES_TABLE_PATH:
                return (<strong>cnes</strong>)
            case ABOUT_PATH:
                return (<strong>sobre</strong>)
            default:
                return (<></>);
        }
    }

    const AppBreadCrumb = () => (
        location.pathname != "/" ?
        <Box sx={{
            color: "#000",
            fontSize: "13px",
            textAlign: isSmallScreen ? "center" : "unset",
            paddingBottom: isSmallScreen ? "15px" : "0"
        }}>
            <Link style={{ color: "#000" }} to={HOME_PATH}>Página Inicial</Link>  {"  >  "}  <CurrentBreadCrumb/>
        </Box>
        : null
    )

    const AppContent = () => (
        <div className="content">
            <AppBreadCrumb />
            {children}
        </div>
    );

    return(
        <div className="App-Body">
            <AppHeader />
            <AppContent />
        </div>
    )
}

export default MainLayout;