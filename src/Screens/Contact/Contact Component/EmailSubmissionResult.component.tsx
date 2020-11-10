import React, { FC } from 'react'
import Popover from '@material-ui/core/Popover'
import {Grid, Paper} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import BeatLoader from 'react-spinners/BeatLoader'
import {PopoverTypography} from "./styles";

interface OwnProps {
  onClose(): void
  error: boolean
  loading: boolean
}

const submissionResult = (error: boolean) => {
  return error ? (
    <PopoverTypography>
      Something went wrong :( Contact me still! This is my email:
      samuel.liotta@gmail.com
    </PopoverTypography>
  ) : (
    <PopoverTypography>
      Your message was successfully sent to samuel.liotta@gmail.com :)
    </PopoverTypography>
  )
}

const EmailSubmissionResultComponent: FC<OwnProps> = ({
  onClose,
  error,
  loading,
}) => {
  return (

    <Popover
      open={true}
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
          {loading ? (
            <BeatLoader size={20} color={'#000'} loading={true} />
          ) : (
            submissionResult(error)
          )}
          <CloseIcon onClick={onClose} />
        </Grid>
      </Paper>
    </Popover>

  )
}

export default EmailSubmissionResultComponent
