import React, {FC} from 'react';
import Popover from '@material-ui/core/Popover';
import {Grid, Paper, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

interface OwnProps {
  anchorEl: HTMLButtonElement | null;
  onClose(): void;
}

const EmailSubmissionResultComponent: FC<OwnProps> = ({anchorEl, onClose}) => {
  return (
    <Popover
      open={true}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Paper>
        <Grid container>

            <Typography>Something went wrong :( Contact me still! This is my email: samuel.liotta@gmail.com</Typography>

      <CloseIcon onClick={onClose}/>
        </Grid>
      </Paper>
    </Popover>
  );
};

export default EmailSubmissionResultComponent;
