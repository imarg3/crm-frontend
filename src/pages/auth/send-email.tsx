import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { WelcomeEmail as Email } from "./welcome-email";
import { Mail } from "../../model/interfaces/mail";

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    user: "my_user",
    pass: "my_password",
  },
});

const emailHtml = render(<Email />);

export const sendMail = (from: string, to: string, subject: string) => {
  const options: Mail = {
    from,
    to,
    subject,
    html: emailHtml,
  };
  transporter.sendMail(options, () => {});
};
