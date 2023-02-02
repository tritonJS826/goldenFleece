import {Request, Response} from "express";
import {sandboxRepository} from "../../repository/sandboxRepository/sandboxRepository";
import {SandboxServiceInterface} from "./SandboxServerInterface";

/**
 * Sandbox service
 */
export class SandboxService implements SandboxServiceInterface {

  /**
   * Response with sandbox index.html page
   */
  public async getSandboxHTML(req: Request, res: Response) {
    const sandboxIndexHTML = await sandboxRepository.getSandboxHTML();

    res.status(200).send(sandboxIndexHTML);
  }

}