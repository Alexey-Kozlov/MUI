import Theme from "./Theme";
import FooterLogo from "../../assets/Footer Adornment.svg";
import FaceBook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import { useTheme, useMediaQuery, Link, Stack, Hidden } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function Footer() {
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down("md"));
    const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));

    const footer = {
        backgroundColor: Theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "absolute",
        bottom: 0
    } as React.CSSProperties;

    const logoStyle = (sel : string) => {
        let rez = {
            logo: {
                height: "",
                verticalAlign: "bottom"
            },
            home: {
                paddingTop: "",
                marginLeft: ""
            },
            grid: {
                padding:"10px 10px 10px 10px"
            },
            spacing: {
                value: 1
            },
            social: {
                marginLeft: "20px",
                marginTop: "-50px",
                position: "absolute"
            }
        };
        if (!matches_md) {
            rez.logo.height = "100px";
            rez.home.paddingTop = "20px";
            rez.home.marginLeft = "40px";
        } else if (!matches_sm) {
            rez.logo.height = "70px";
            rez.home.paddingTop = "15px";
            rez.home.marginLeft = "30px";
            rez.spacing.value = 0;
            rez.social.marginTop = "-40px";
            rez.social.marginLeft = "10px";
        } else {
            rez.logo.height = "60px";
            rez.home.paddingTop = "10px";
            rez.home.marginLeft = "20px";
            rez.grid.padding = "20px 5px 0px 5px"; //верх право низ лево
            rez.spacing.value = 0;
            rez.social.marginTop = "-35px";
            rez.social.marginLeft = "2px";
        }

        switch (sel) {
            case "logo": return rez.logo;
            case "home": return rez.home;
            case "grid": return rez.grid;
            case "spacing": return rez.spacing.value;
            case "social": return rez.social;
        }
        return undefined;
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
    const gridContainer = {
        width: "100%"
    }
    const icons = {
        height: "16px",
        width: "16px"
    }

    return (
        <div style={footer}>
            <Stack sx={mainContainer} direction="row">
                <Link sx={link} style={logoStyle("home") as React.CSSProperties} href="/">Домой</Link>
                <Grid2 container justifyContent="center" sx={gridContainer}>
                    <Grid2 sx={logoStyle("grid") as React.CSSProperties}>
                        <Grid2 container direction="column" spacing={logoStyle("spacing") as number}>
                            <Grid2 sx={link} component="a" href="/services">
                                Сервисы
                            </Grid2>
                            <Hidden smDown>
                               <Grid2 sx={link} component="a" href="/customsoftware">
                                    ПО
                                </Grid2>
                                <Grid2 sx={link} component="a" href="/mobileapps">
                                    Мобильные приложеия
                                </Grid2>
                                <Grid2 sx={link} component="a" href="/websites">
                                    Сайты
                                </Grid2>
                            </Hidden>
                        </Grid2>
                    </Grid2>
                    <Hidden smDown>
                        <Grid2 sx={logoStyle("grid") as React.CSSProperties}>
                            <Grid2 container direction="column" spacing={logoStyle("spacing") as number}>
                                <Grid2 sx={link} component="a" href="/revolution">
                                    Революция
                                </Grid2>
                                <Grid2 sx={link} component="a" href="/about">
                                    О нас
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Hidden>
                    <Grid2 sx={logoStyle("grid") as React.CSSProperties}>
                        <Grid2 container direction="column" spacing={logoStyle("spacing") as number}>
                            <Grid2 sx={link} component="a" href="/contacts">
                                Контакты
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={logoStyle("grid") as React.CSSProperties}>
                        <Grid2 container direction="column" spacing={logoStyle("spacing") as number}>
                            <Grid2 sx={link} component="a" href="/estimate">
                                Оценка
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Stack>
            <img src={FooterLogo.toString()} style={logoStyle("logo") as React.CSSProperties} />

            <Grid2 container sx={logoStyle("social") as React.CSSProperties} spacing={1} >
                <Grid2 component="a" href="https://www.facebook.com" target="_blamk">
                    <img src={FaceBook.toString()} style={ icons} />
                </Grid2>
                <Grid2 component="a" href="https://www.twitter.com" target="_blamk">
                    <img src={Twitter.toString()} style={icons} />
                </Grid2>
                <Grid2 component="a" href="https://www.instagran.com" target="_blamk">
                    <img src={Instagram.toString()} style={icons} />
                </Grid2>
            </Grid2>
        </div>
    )
}