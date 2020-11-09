import React, { FC } from 'react'
import Popover from '@material-ui/core/Popover'
import { Grid, Paper, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import BeatLoader from 'react-spinners/BeatLoader'

interface OwnProps {
  anchorEl: HTMLButtonElement | null
  onClose(): void
  error: boolean
  loading: boolean
}

const submissionResult = (error: boolean) => {
  return error ? (
    <Typography>
      Something went wrong :( Contact me still! This is my email:
      samuel.liotta@gmail.com
    </Typography>
  ) : (
    <Typography>
      Your message was successfully sent to samuel.liotta@gmail.com :)
    </Typography>
  )
}

const EmailSubmissionResultComponent: FC<OwnProps> = ({
  anchorEl,
  onClose,
  error,
  loading,
}) => {
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
          {loading ? (
            <BeatLoader size={20} color={'#000'} loading={true} />
          ) : (
            submissionResult(error)
          )}

          {/*{error ?*/}

          {/*  <Typography>Something went wrong :( Contact me still! This is my email: samuel.liotta@gmail.com</Typography>*/}

          {/*  :*/}
          {/*  <Typography>Your message was successfully sent to samuel.liotta@gmail.com :)</Typography>*/}
          {/*}*/}

          <CloseIcon onClick={onClose} />
        </Grid>
      </Paper>
    </Popover>
  )
}

export default EmailSubmissionResultComponent
