import {Request, Response} from "express";

/**
 * Public sandbox service methods
 */
export interface SandboxServiceInterface {
  /**
   * Response with sandbox index.html page
   */
  getSandboxHTML(req: Request, res: Response): Promise<void>
}