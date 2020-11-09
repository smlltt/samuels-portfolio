import React, { FC } from 'react'
import EmailSubmissionResultComponent from './EmailSubmissionResult.component'
import ContactForm from './ContactForm'
import { Container } from '@material-ui/core'

interface OwnProps {
  error: boolean
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void
  anchorEl: HTMLButtonElement | null
  onClose(): void
  contactButtonClicked: boolean
  loading: boolean
  handleSubmit(name: string, email: string, message: string): void
}

const ContactComponent: FC<OwnProps> = ({
  handleSubmit,
  error,
  anchorEl,
  onClose,
  contactButtonClicked,
  loading,
}) => {
  return (
    <Container maxWidth="xs">
      <ContactForm handleSubmit={handleSubmit} />
      {contactButtonClicked ? (
        <EmailSubmissionResultComponent
          loading={loading}
          anchorEl={anchorEl}
          onClose={onClose}
          error={error}
        />
      ) : null}
    </Container>
  )
}

export default ContactComponent
