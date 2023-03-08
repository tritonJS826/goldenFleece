/**
 * Request parameters for ask admin operation
 */
export interface AskAdminMailParams {
  /**
   * Customer's name
   */
  name: string;

  /**
   * Customer's email
   */
  email: string;

  /**
   * Customer's message
   */
  message: string

  /**
   * Customer's phone
   */
  phone?: string;
}