import { createTheme } from '@mui/material/styles';
import { blue } from "@mui/material/colors";

const arcBlue: string = "#0B72B9";
const arcOrange: string = "#FFBA60";

declare module "@mui/material/styles" {
    interface CommonColors {
        blue: string;
        orange: string;
    }
    interface TypographyVariantsOptions {
        tab: React.CSSProperties;
    }
    interface TypographyVariants {
        tab: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        tab: {};
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
            color: blue[50],
            fontSize: "1rem"
        }
    }
});