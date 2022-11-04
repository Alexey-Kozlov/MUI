import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import logo from "../../assets/logo.svg";
import Theme from "./Theme";

const imageStyle = {
    height: "64px"
}
const tabStyle = {
    ...Theme.typography.tab,
    minWidth: 10
}

export default function Header(props: any) {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <img src={logo.toString()} alt="" style={imageStyle} />
                    <Tabs sx={{ ml: "auto" }}>
                        <Tab label="Домой" sx={tabStyle} />
                        <Tab label="Сервисы" sx={tabStyle} />
                        <Tab label="Революция" sx={tabStyle} />
                        <Tab label="О нас" sx={tabStyle} />
                        <Tab label="Контакты" sx={tabStyle} />
                    </Tabs>
                </Toolbar>
            </AppBar>

        </>
    )
}