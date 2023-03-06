import {MailServiceInterface} from "./mailServiceInterface";
import nodemailer from "nodemailer";
import {config} from "dotenv";
import Mail from "nodemailer/lib/mailer";

config();

const MAIL_LOGIN = process.env.MAIL_LOGIN;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const mailDefaultReceivers = [MAIL_LOGIN];

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: MAIL_LOGIN,
    pass: MAIL_PASSWORD,
  },
});

const sendMail = (mailConfig: Mail.Options) => {
  transporter.sendMail(mailConfig, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};


/**
 * Mail sender service
 * Adjust gmail before using (https://miracleio.me/snippets/use-gmail-with-nodemailer/)
 */
export class StubMailService implements MailServiceInterface {

  /**
   * Question or comment from customer to admin
   */
  public askAdminMail() {
    const mailOptionsInternal = {
      from: MAIL_LOGIN,
      to: mailDefaultReceivers.join(", "),
      subject: "ask admin",
      text: "customer's text template (TODO)",
    };
    sendMail(mailOptionsInternal);

    this.customerNotification(mail);
  }

  /**
   * Customer trying to book something
   */
  public bookingRequestMail() {
    const mailOptionsInternal = {
      from: MAIL_LOGIN,
      to: mailDefaultReceivers.join(", "),
      subject: "booking request",
      text: "customer's text template(TODO)",
    };
    sendMail(mailOptionsInternal);

    this.customerNotification(mail);
  }

  private customerNotification(mail: string) {
    const mailOptionsToCustomer = {
      from: MAIL_LOGIN,
      to: mail,
      subject: "Golden fleece automatic mail system ",
      text: "Your message received! Wait for answer",
    };
    sendMail(mailOptionsToCustomer);
  }

}