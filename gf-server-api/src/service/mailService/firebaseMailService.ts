import {Request, Response} from "express";
import {AskAdminMailParams} from "src/model/AskAdminMailParams";
import {BookingRequestMailParams} from "src/model/BookingRequestMailParams";
import {MailServiceInterface} from "src/service/mailService/MailServiceInterface";

/**
 * Mail sender service
 */
export class FirebaseMailService implements MailServiceInterface {

  /**
   * Question or comment from customer to admin
   */
  public askAdminMail = async (req: Request<AskAdminMailParams>, res: Response) => {
    console.log("TODO: STUB");
  };

  /**
   * Customer trying to book something
   */
  public bookingRequestMail = async (req: Request<BookingRequestMailParams>, res: Response) => {
    console.log("TODO: STUB");
  };

}
