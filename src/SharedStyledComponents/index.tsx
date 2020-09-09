import {Button, styled} from "@material-ui/core";
import theme from "../Theme";



export const MainButton = styled(Button)({
    background: theme.palette.primary.main,
    '&:hover': {
        background: "#f00",
    },
});