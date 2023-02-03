import {Request, Response} from "express";
import {resourceRepository} from "../../repository/resourceRepository/resourceRepository";
import {ResourceServiceInterface} from "./ResourceServiceInterface";

/**
 * Resource service
 */
export class ResourceServiceModel implements ResourceServiceInterface {

  /**
   * Crete new File (upload)
   */
  public createFile = async (req: Request, res: Response): Promise<void> => {
    const files = req.files;

    if (!files) {
      res.status(409).json({status: "error", message: "no files"});
      return undefined;
    }

    const filesNames = resourceRepository.createFiles(files, res);

    res.json({status: "success", files: filesNames});
    return undefined;
  };

  /**
   * Update files by file's id
   */
  public updateFile = async (req: Request, res: Response): Promise<void> => {
    const files = req.files;

    if (!files) {
      res.status(409).json({status: "error", message: "no files"});
      return undefined;
    }

    const filesNames = resourceRepository.updateFiles(files, res);

    res.status(200).json({status: "success", files: filesNames});
  };

  /**
   * Delete files by file's id
   */
  public deleteFiles = async (req: Request, res: Response): Promise<void> => {
    // files id's to remove
    const files: string[] = (req.query.files as string).split(",");

    resourceRepository.deleteFiles(files, res);

    res.status(200).json({status: "success"});
  };

}