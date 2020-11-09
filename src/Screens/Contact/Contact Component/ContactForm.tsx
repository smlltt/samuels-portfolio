import React, {FC} from 'react';
import {Form, Field, Formik} from 'formik';
import * as yup from 'yup';
import {Box} from "@material-ui/core";
import {MessageTextField, StyledTextField, SubmitButton} from "./styles";



interface OwnProps {
    handleSubmit(name: string, email:string, message:string): void;
}

const contactSchema = yup.object().shape({
    name: yup
        .string()
        .max(30),
    email: yup
        .string()
        .required('this field is required')
        .email('must be a valid email'),
    message: yup
        .string()
        .required('this field is required')
        .min(30, 'must contain at least 30 characters'),
});

const ContactForm: FC<OwnProps> = ({handleSubmit}) => (
    <div>
        {/*<Paper>*/}
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            // onSubmit={(values, actions) => {
            //     setTimeout(() => {
            //         alert(JSON.stringify(values, null, 2));
            //         actions.setSubmitting(false);
            //     }, 1000);
            // }}
            onSubmit={(values, actions) => {
                handleSubmit(values.name, values.message, values.email);
                // console.log(values)
                actions.resetForm();
                //check other properties!!!
                // actions.setSubmitting(false)
            }}
        validationSchema={contactSchema}
        >
            {({ isValid }) => (
                // <Form onChange={() => console.log('change')}>
                <Form>

                    <Field
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        placeholder="Name (optional)"
                        component={StyledTextField}
                    />



                    <Field
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        placeholder="Email"
                        component={StyledTextField}
                    />

                    <Box paddingTop={2} />
                    <Field
                        margin="normal"
                        fullWidth
                        id="message"
                        label="Your Message"
                        name="message"
                        placeholder="Your Message"
                        variant="outlined"
                        component={MessageTextField}

                    />

                    <Box paddingTop={2} />

                    <SubmitButton type="submit" disabled={!isValid} fullWidth>
                       Submit
                    </SubmitButton>
                </Form>
            )}
        </Formik>
        {/*</Paper>*/}
    </div>
);

export default ContactForm;