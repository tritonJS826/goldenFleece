import {MailServiceInterface} from "./MailServiceInterface";
import nodemailer from "nodemailer";
import {config} from "dotenv";
import Mail from "nodemailer/lib/mailer";
import {getCurrentDate} from "../../utils/getCurrentDate";
import {AskAdminMailParams} from "../../model/AskAdminMailParams";
import {BookingRequestMailParams} from "../../model/BookingRequestMailParams";
import {Request, Response} from "express";

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

/**
 * Helper to send mail
 */
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
export class GMailService implements MailServiceInterface {

  /**
   * Question or comment from customer to admin
   */
  public askAdminMail = async (req: Request<AskAdminMailParams>, res: Response) => {
    console.log(req.body);
    const mailOptionsInternal = {
      from: MAIL_LOGIN,
      to: mailDefaultReceivers.join(", "),
      subject: `Ask admin ${getCurrentDate()}`,
      text: `
      name: ${req.body.name}
      email: ${req.body.email}
      message: ${req.body.message}
      phone: ${req.body.phone ?? "-"}
      `,
    };
    sendMail(mailOptionsInternal);

    this.customerNotification(req.body.email);

    res.status(200);
  };

  /**
   * Customer trying to book something
   */
  public bookingRequestMail = async (req: Request<BookingRequestMailParams>, res: Response) => {
    const mailOptionsInternal = {
      from: MAIL_LOGIN,
      to: mailDefaultReceivers.join(", "),
      subject: `booking request ${getCurrentDate()}`,
      text: `
      email: ${req.body.email}
      name: ${req.body.name}
      dateIn: ${req.body.dateIn}
      dateOut: ${req.body.dateOut}
      roomNumber: ${req.body.roomNumber}
      adultsAmount: ${req.body.adultsAmount}
      childrenAmount: ${req.body.childrenAmount}
      phone: ${req.body.phone ?? "-"}
      message: ${req.body.message ?? "-"}
      `,
    };
    sendMail(mailOptionsInternal);

    this.customerNotification(req.body.email);

    res.status(200);
  };

  private customerNotification(customerEmail: string) {
    const mailOptionsToCustomer = {
      from: MAIL_LOGIN,
      to: customerEmail,
      subject: "Golden fleece automatic mail system",
      text: "Your message received! Wait for answer",
    };
    sendMail(mailOptionsToCustomer);
  }

}