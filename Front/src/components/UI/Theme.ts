import { createTheme } from '@mui/material/styles';
import { blue, orange } from "@mui/material/colors";

const arcBlue: string = "#0B72B9";
const arcOrange: string = "#FFBA60";

declare module "@mui/material/styles" {
    interface CommonColors {
        blue: string;
        orange: string;
    }
    interface TypographyVariantsOptions {
        tab: React.CSSProperties;
        estimate: React.CSSProperties;
    }
    interface TypographyVariants {
        tab: React.CSSProperties;
        estimate: React.CSSProperties;
    }
}

export default createTheme({
    palette: {
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        }
    },
    typography: {        
        tab: {            
            textTransform: "none",
            color: blue[100],
            fontSize: "1rem",
            borderRadius: "40px"
        },
        estimate: {
            color: "white",
            borderRadius: "40px",
            backgroundColor: `${arcOrange}`,
            fontSize: "1rem",
            textTransform: "none"
        }
    }
});