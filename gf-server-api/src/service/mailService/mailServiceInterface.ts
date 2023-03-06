/**
 * Mail service interface
 */
export interface MailServiceInterface {

  /**
   * Question or comment from customer to admin
   */
  askAdminMail(): void

  /**
   * Customer trying to book something
   */
  bookingRequestMail(): void
}