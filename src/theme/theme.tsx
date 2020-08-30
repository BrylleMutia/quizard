import { createMuiTheme } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";

// create custom material-ui themee
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#329D9C"
        },
        secondary: blue,
    }   
});