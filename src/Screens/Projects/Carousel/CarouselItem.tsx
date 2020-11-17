import React, { useState } from 'react'
import {Box, Collapse, Grid, IconButton} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {StyledCardHeader, StyledCardMedia, StyledTypography} from '../styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 0,
      paddingTop: '100%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(90deg)',
    },
  }),
)


const CarouselItem = (item: any) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item sm={3} xs={10}>
      <Card>
        <Box onClick={() => window.open(item.link)}>
          <Grid item container justify={'center'}>
            <StyledCardHeader
              title={item.title}
              disableTypography
            ></StyledCardHeader>

          </Grid>
          <StyledCardMedia
            className={classes.media}
            image={item.imgSrc}
          ></StyledCardMedia>
        </Box>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <StyledTypography>{item.description}</StyledTypography>
          </CardContent>
        </Collapse>

      </Card>
    </Grid>
  )
}

export default CarouselItem
