import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',

        },
        secondary: {
            main: '#000000',
            dark: '#202020'
        },
    },
    typography: {
        fontFamily: 'Arial',
    },
});

export default theme;