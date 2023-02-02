import {Response} from "express";
import fileUpload from "express-fileupload";

/**
 * Resource repository interface
 */
export interface ResourceRepositoryInterface {
  /**
   * Create files
   * @returns {string[]} list of files id
   */
  createFiles(files: fileUpload.FileArray, res: Response): Promise<string[]>;

  /**
   * Update files
   */
  updateFiles(files: fileUpload.FileArray, res: Response): Promise<string[]>;

  /**
   * Delete files
   */
  deleteFiles(filesIds: string[], res: Response): Promise<void>;
}
