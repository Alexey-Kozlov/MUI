import { AppBar, Button, Divider, Menu, MenuItem, Tab, Tabs, ThemeProvider, Toolbar } from "@mui/material";
import {  MouseEventHandler, useEffect, useState } from "react";
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
    let currentMenu = {
        tabNumber: 0,
        menuIndex: 0
    }
    const getActiveTab = (url: string) => {
        switch (url) {
            case "/":
                currentMenu.tabNumber = 0;
                break;
            case "/services":
                currentMenu.tabNumber = 1;
                currentMenu.menuIndex = 0;
                break;
            case "/customsoftware":
                currentMenu.tabNumber = 1;
                currentMenu.menuIndex = 1;
                break;
            case "/mobileapps":
                currentMenu.tabNumber = 1;
                currentMenu.menuIndex = 2;
                break;
            case "/websites":
                currentMenu.tabNumber = 1;
                currentMenu.menuIndex = 3;
                break;
                break;
            case "/revolution":
                currentMenu.tabNumber = 2;
                break;
            case "/about":
                currentMenu.tabNumber = 3;
                break;
            case "/contacts":
                currentMenu.tabNumber = 4;
                break;
        }
        return currentMenu;
    }

    let url = useLocation();
    const [tabState, setTabState] = useState(getActiveTab(url.pathname).tabNumber);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(getActiveTab(url.pathname).menuIndex);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                            <Tab
                                id="serviceTab"
                                label="Сервисы"
                                sx={tabStyle}
                                aria-owns={open ? 'serviceMenu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onMouseOver={handleClick}
                            />
                            <Tab label="Революция" sx={tabStyle} href="/revolution" />
                            <Tab label="О нас" sx={tabStyle} href="/about" />
                            <Tab label="Контакты" sx={tabStyle} href="/contacts" />
                        </Tabs>
                    </ThemeProvider>
                    <Button variant="contained" color="secondary" style={buttonStyle}>Тест</Button>
                    <Menu
                        id="serviceMenu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                    >
                        <MenuItem selected={selectedIndex === 0}
                            onClick={handleClose} component='a' href="/services">Сервисы</MenuItem>
                        <Divider />
                        <MenuItem selected={selectedIndex === 1}
                            onClick={handleClose} component='a' href="/customsoftware">ПО</MenuItem>
                        <MenuItem selected={selectedIndex === 2}
                            onClick={handleClose} component='a' href="/mobileapps">Мобильное приложение</MenuItem>
                        <MenuItem selected={selectedIndex === 3}
                            onClick={handleClose} component='a' href="/websites">Сайты</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

        </>
    )
}