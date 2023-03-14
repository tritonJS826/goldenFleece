import {Request, Response} from "express";
import {AskAdminMailParams} from "../../model/AskAdminMailParams";
import {BookingRequestMailParams} from "../../model/BookingRequestMailParams";

/**
 * Mail service interface
 */
export interface MailServiceInterface {

  /**
   * Question or comment from customer to admin
   */
  askAdminMail(req: Request<AskAdminMailParams>, res: Response): Promise<void>

  /**
   * Customer trying to book something
   */
  bookingRequestMail(req: Request<BookingRequestMailParams>, res: Response): Promise<void>
}