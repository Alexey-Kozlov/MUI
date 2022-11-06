import { AppBar, Button, Tab, Tabs, ThemeProvider, Toolbar } from "@mui/material";
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Theme from "./Theme";
import themeActiveTab from './ThemeActiveTab';

const imageStyle = {
    height: "64px"
}
const tabStyle = {
    ...Theme.typography.tab,
    minWidth: 10
}
const buttonStyle = {
    ...Theme.typography.estimate,
    margin: "0 25px 0"
}
const logoContainer = {
    padding: 0
}

export default function Header() {
    const getActiveTab = (url: string) => {
        let currentTabNumber = 0;
        switch (url) {
            case "/": currentTabNumber = 0; break;
            case "/services": currentTabNumber = 1; break;
            case "/revolution": currentTabNumber = 2; break;
            case "/about": currentTabNumber = 3; break;
            case "/contacts": currentTabNumber = 4; break;
        }
        return currentTabNumber;
    }

    let url = useLocation();
    const [tabState, setTabState] = useState(getActiveTab(url.pathname));

    return (
        <>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button href="/" style={logoContainer} disableRipple>
                        <img src={logo.toString()} alt="" style={imageStyle} />
                    </Button>
                    <ThemeProvider theme={themeActiveTab}>
                        <Tabs
                            sx={{ ml: "auto" }}
                            value={tabState}
                            textColor="primary"
                            indicatorColor="primary"
                            TabIndicatorProps={{ sx: { height: "5px" } }}
                        >
                            <Tab label="Домой" sx={tabStyle} href="/" />
                            <Tab label="Сервисы" sx={tabStyle} href="/services" />
                            <Tab label="Революция" sx={tabStyle} href="/revolution" />
                            <Tab label="О нас" sx={tabStyle} href="/about" />
                            <Tab label="Контакты" sx={tabStyle} href="/contacts" />
                        </Tabs>
                    </ThemeProvider>
                    <Button variant="contained" color="secondary" style={buttonStyle}>Тест</Button>
                </Toolbar>
            </AppBar>

        </>
    )
}