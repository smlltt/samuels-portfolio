import React, {FC} from 'react';
import EmailSubmissionResultComponent from "./EmailSubmissionResult.component";

interface OwnProps {
  error: boolean;
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
  anchorEl: HTMLButtonElement | null;
  onClose(): void;
  contactButtonClicked: boolean;
  loading: boolean;
}

const ContactComponent: FC<OwnProps> = ({error, handleClick, anchorEl, onClose, contactButtonClicked, loading}) => {

  return (
    <div>

      {/*add formik: name, email, message. onSubmit sendEmail*/}
      <button onClick={handleClick}>Send email</button>
      {contactButtonClicked ? <EmailSubmissionResultComponent loading={loading} anchorEl={anchorEl} onClose={onClose} error={error}/> : null}
    </div>
  );
};

export default ContactComponent;
