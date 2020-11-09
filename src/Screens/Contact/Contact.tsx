import React, { FC, useState } from 'react'
import { Box, Container } from '@material-ui/core'
import ContactComponent from './Contact Component'
import { emailjsApi } from '../../Services/emailjs'

interface OwnProps {
  hideScrollToTop(): void
  showScrollToTop(): void
  contactButtonClicked: boolean
}

const Contact: FC<OwnProps> = ({
  hideScrollToTop,
  showScrollToTop,
  contactButtonClicked,
}) => {
  const [error, setError] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [loading, setLoading] = useState(false)

  const toggleError = () => {
    showScrollToTop()
    setError(!error)
  }

  const handlePopoverClose = () => toggleError()

  const handleSubmit = (name: string, email: string, message: string) => {
    setLoading(true)
    hideScrollToTop()

    emailjsApi.sendEmail(name, email, message).then(
      (res) => {
        setLoading(false)
        console.log(res.text)
        if (error) {
          setError(false)
        }
      },
      (err) => {
        setLoading(false)
        if (!error) {
          setError(true)
        }
        //use reCaptcha
        console.log(err.text)
      },
    )
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true)
    hideScrollToTop()
    setAnchorEl(event.currentTarget)

    emailjsApi.sendEmail('czesc', 'dd@fd.it', 'hopefully last test :P').then(
      (res) => {
        setLoading(false)
        console.log(res.text)
        if (error) {
          setError(false)
        }
      },
      (err) => {
        setLoading(false)
        if (!error) {
          setError(true)
        }
        //use reCaptcha
        console.log(err.text)
      },
    )
  }

  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <Container>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100wh',
          }}
        >
          <ContactComponent
            error={error}
            handleClick={handleClick}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            contactButtonClicked={contactButtonClicked}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Container>
    </div>
  )
}

export default Contact
