import Theme from "./Theme";
import FooterLogo from "../../assets/Footer Adornment.svg";
import { useTheme, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Footer() {
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down("md"));
    const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));

    const footer = {
        backgroundColor: Theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    } as React.CSSProperties;

    const logoStyle = () => {
        let rez = {
            height: "", verticalAlign: "bottom"};
        if (!matches_md) {
            rez.height = "100px";
        } else if (!matches_sm) {
            rez.height = "70px";
        } else {
            rez.height = "40px";
        }
        return rez;
    }
    const mainContainer = {
        position: "absolute",
        width: "100%"
    }
    const link = {
        color: "white",
        fontSize: "0.75rem",
        textDecoration:"none"
    }
    const gridItem = {
        marginLeft: "20px",
        marginRight: "200px",
        marginTop: "10px",
        marginBottom:"10px"
    }

    return (
        <div style={footer}>
            <Grid2 container justifyContent="space-between" sx={mainContainer}>
                <Grid2 sx={gridItem}>
                    <Grid2 container direction="column" spacing={1}>
                        <Grid2 sx={link} component="a" href="/">
                            Домой
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 sx={gridItem}>
                    <Grid2 container direction="column" spacing={1}>
                        <Grid2 sx={link} component="a" href="/services">
                            Сервисы
                        </Grid2>
                        <Grid2 sx={link} component="a" href="/customsoftware">
                            ПО
                        </Grid2>
                        <Grid2 sx={link} component="a" href="/mobileapps">
                            Мобильные приложеия
                        </Grid2>
                        <Grid2 sx={link} component="a" href="/websites">
                            Сайты
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 sx={gridItem}>
                    <Grid2 container direction="column" spacing={1}>
                        <Grid2 sx={link} component="a" href="/revolution">
                            Революция
                        </Grid2>
                        <Grid2 sx={link} component="a" href="/about">
                            О нас
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 sx={gridItem}>
                    <Grid2 container direction="column" spacing={1}>
                        <Grid2 sx={link} component="a" href="/contacts">
                            Контакты
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 sx={gridItem}>
                    <Grid2 container direction="column" spacing={1}>
                        <Grid2 sx={link} component="a" href="/estimate">
                            Оценка
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
            <img src={FooterLogo.toString()} style={logoStyle() } />
        </div>
    )
}