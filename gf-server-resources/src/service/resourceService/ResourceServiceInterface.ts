import {Request, Response} from "express";

/**
 * Resource service interface
 */
export interface ResourceServiceInterface {
  /**
   * Create new files
   */
  createFile(req: Request, res: Response): Promise<void>

  /**
   * Update files by file's id
   */
  updateFile(req: Request, res: Response): Promise<void>

  /**
   * Delete file's by file's id
   */
  deleteFiles(req: Request, res: Response): Promise<void>
}