import { AppBar, Button, Tab, Tabs, ThemeProvider, Toolbar } from "@mui/material";
import { useState } from "react";
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
const tabActive = {
    bgcolor:"white"
}

export default function Header(props: any) {

    const [tadState, setTabState] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newTabValue: number) => {
        setTabState(newTabValue);
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <img src={logo.toString()} alt="" style={imageStyle} />
                    <ThemeProvider theme={themeActiveTab}>
                    <Tabs
                            sx={{ ml: "auto" }}
                            value={tadState}
                            onChange={handleTabChange}
                            textColor="primary"
                            indicatorColor="primary"
                            TabIndicatorProps={{ sx: {height:"5px"} }}
                        >
                        <Tab  label="Домой" sx={tabStyle} />
                        <Tab label="Сервисы" sx={tabStyle} />
                        <Tab label="Революция" sx={tabStyle} />
                        <Tab label="О нас" sx={tabStyle} />
                        <Tab label="Контакты" sx={tabStyle} />
                        </Tabs>
                    </ThemeProvider>
                    <Button variant="contained" color="secondary" style={buttonStyle}>Тест</Button>
                </Toolbar>
            </AppBar>

        </>
    )
}