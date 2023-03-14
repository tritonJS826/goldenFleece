import {Request, Response} from "express";
import {AskAdminMailParams} from "../../model/AskAdminMailParams";
import {BookingRequestMailParams} from "../../model/BookingRequestMailParams";
import {MailServiceInterface} from "./MailServiceInterface";

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
