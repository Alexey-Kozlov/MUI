import { createTheme } from '@mui/material/styles';
import { blue } from "@mui/material/colors";

export default createTheme({
    palette: {
        primary: {
            main: "#fff"
        }
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    color: blue[100],
                    fontSize: "1rem",
                    '&.Mui-selected': {
                        backgroundColor:blue[500],
                        color:"white"
                    },
                    '&:hover': {
                        backgroundColor: blue[500],
                        color: "white"
                    }
                }
            }
        }
    }
});