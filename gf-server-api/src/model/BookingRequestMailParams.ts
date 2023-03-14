/**
 * Request parameters for booking operation
 */
export interface BookingRequestMailParams {
  /**
   * Customer's email
   */
  email: string;

  /**
   * Customer's name
   */
  name: string;

  /**
   * Check in date yyyy-mm-dd formata
   */
  dateIn: string;

  /**
   * Check out date yyyy-mm-dd formata
   */
  dateOut: string;

  /**
   * Room's number which customer want to book
   */
  roomNumber: number;

  /**
   * Amount of adults for booking
   */
  adultsAmount: number;

  /**
   * Amount of children for booking
   */
  childrenAmount: number;

  /**
   * Customer's phone
   */
  phone?: string;

  /**
   * Customer's message
   */
  message?: string;
}