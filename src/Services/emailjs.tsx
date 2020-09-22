import {emailjsConfig} from "../config";
import emailjs from 'emailjs-com';

export const emailjsApi = {
  sendEmail: (name: string, email: string, message: string) =>
    emailjs.send
    (emailjsConfig.serviceId, emailjsConfig.templateId, {name: name, email: email, message: message}, emailjsConfig.userId),
};
