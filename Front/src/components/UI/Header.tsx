import { AppBar, Button, IconButton, Menu, MenuItem, SwipeableDrawer, Tab, Tabs, ThemeProvider, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Theme from "./Theme";
import themeActiveTab from './ThemeActiveTab';
import { Menu as MenuIcon } from '@mui/icons-material';


export default function Header() {

    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down("md"));
    const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);



    const logoStyle = () => {
        let rez = {};
        if (!matches_md) {
            rez = { height: "64px" }
        } else if (!matches_sm) {
            rez = { height: "48px" }
        } else {
            rez = { height: "32px" }
        }
        return rez;
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
    const menuStyle = {
        popOverRoot: {
            pointerEvents: "none"
        }
    }
    const drawerIconContainer = {
        marginLeft: "auto",
        "&:hover": {
            ...Theme.typography.estimate
        }
    }

    let currentMenu = {
        tabNumber: 0,
        menuIndex: 0
    }
    const getActiveTab = (url: string) => {
        currentMenu.menuIndex = -1;
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

    const url = useLocation();
    const _tabState = getActiveTab(url.pathname);
    const [tabState, setTabState] = useState(_tabState.tabNumber);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(_tabState.menuIndex);
    const [openDrawer, setOpenDrawer] = useState(false);

    let currentlyHovering = false;

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleHover() {
        currentlyHovering = true;
    }
    function handleCloseHover() {
        currentlyHovering = false;
        setTimeout(() => {
            if (!currentlyHovering) {
                handleClose();
            }
        }, 50);
    }

    const tabs = (    
        <React.Fragment>
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
                    label="Сервисы"
                    sx={tabStyle}
                    aria-owns={anchorEl ? 'serviceMenu' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    href="/services"
                    onMouseOver={handleClick}
                    onMouseLeave={handleCloseHover}
                />
                <Tab label="Революция" sx={tabStyle} href="/revolution" />
                <Tab label="О нас" sx={tabStyle} href="/about" />
                <Tab label="Контакты" sx={tabStyle} href="/contacts" />
            </Tabs>

            <Button variant="contained" style={buttonStyle}>Тест</Button>

            <Menu
                id="serviceMenu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    onMouseEnter: handleHover,
                    onMouseLeave: handleCloseHover,
                    style: { pointerEvents: "auto" }
                }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                sx={menuStyle.popOverRoot}
                keepMounted
                PaperProps={{
                    sx: {
                        backgroundColor: Theme.palette.common.blue,
                        color: "white",
                        borderRadius: "0px"
                    }
                }}
                disableAutoFocusItem={true}
            >
                <MenuItem selected={selectedIndex === 0}
                    onClick={handleClose} component='a' href="/services">Сервисы</MenuItem>
                <MenuItem selected={selectedIndex === 1}
                    onClick={handleClose} component='a' href="/customsoftware">ПО</MenuItem>
                <MenuItem selected={selectedIndex === 2}
                    onClick={handleClose} component='a' href="/mobileapps">Мобильное приложение</MenuItem>
                <MenuItem selected={selectedIndex === 3}
                    onClick={handleClose} component='a' href="/websites">Сайты</MenuItem>
            </Menu>
            </ThemeProvider>
    </React.Fragment>
    )

    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS} open={openDrawer}
                onClose={() => {
                    setOpenDrawer(false)
                }}
                onOpen={() => setOpenDrawer(true)}
            >
                Что то внутри
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={drawerIconContainer}>
                <MenuIcon />
            </IconButton>
        </>
    )

    return (
        <>
            <AppBar position="fixed" sx={logoStyle()}>
                <Toolbar disableGutters style={{ minHeight: "0px" }}>
                    <Button href="/" style={logoContainer} disableRipple>
                        <img src={logo.toString()} alt="" style={logoStyle()} />
                    </Button>
                    {matches_md ? drawer : tabs}
                </Toolbar>
            </AppBar>

        </>
    )
}