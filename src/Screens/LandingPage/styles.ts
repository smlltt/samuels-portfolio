import { styled } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import {Button} from "@material-ui/core";
import theme from "../../Theme";

export const CardContentAbsolute = styled(CardContent)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column"
});

export const ButtonFlexStart = styled(Button)({
    background: theme.palette.secondary.main,
    '&:hover': {
        background: theme.palette.primary.main,
    },
});

