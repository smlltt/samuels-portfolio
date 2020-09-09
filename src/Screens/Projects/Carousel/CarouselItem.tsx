import React, {useState} from 'react';
import {Collapse, Grid, IconButton, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from "@material-ui/core/CardActions";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        media: {
            height: 0,
            [theme.breakpoints.up('sm')]: {
                paddingTop: '90.25%'
            },
            [theme.breakpoints.down('sm')]: {
                paddingTop: '60.25%'
            },
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);
// interface Item {
//     item: Object,
//     class: how should I type it?
// }
// @ts-ignore
const CarouselItem = (item : any) => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <Grid item md={3}>
        <Card>
            <Grid item container justify={'center'}>
            <CardHeader title={item.title}></CardHeader>
            </Grid>
            <CardMedia className={classes.media} image={item.imgSrc}></CardMedia>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    // className={expanded ? classes.expandOpen : classes.expand}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>{item.description}</Typography>
                </CardContent>
            </Collapse>
        </Card>
        </Grid>

    )
}


export default CarouselItem;
