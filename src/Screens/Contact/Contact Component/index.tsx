import React, {FC} from 'react';
import EmailSubmissionResultComponent from "./EmailSubmissionResult.component";

interface OwnProps {
  error: boolean;
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
  anchorEl: HTMLButtonElement | null;
  onClose(): void;
}

const ContactComponent: FC<OwnProps> = ({error, handleClick, anchorEl, onClose}) => {

  return (
    <div>

      {/*add formik: name, email, message. onSubmit sendEmail*/}
      <button onClick={handleClick}>Send email</button>
      {error ? <EmailSubmissionResultComponent anchorEl={anchorEl} onClose={onClose}/> : null}
    </div>
  );
};

export default ContactComponent;
