import fileUpload from "express-fileupload";
import {isFileExist} from "../../utils/isFileExist";
import {ResourceRepositoryInterface} from "./ResourceRepositoryInterface";
import {v4 as uuidv4} from "uuid";
import {writeFile} from "../../utils/writeFile";
import {Response} from "express";
import {removeFile} from "../../utils/removeFile";


/**
 * Resource repository used File System to operate with files
 */
export class ResourceRepositoryFS implements ResourceRepositoryInterface {

  /**
   * Create files
   * @returns {string[]} list of files id
   */
  public createFiles = async (files: fileUpload.FileArray, res: Response): Promise<string[]> => {
    const filesNames = Object.values(files)
    // use any due to error in library types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((file: any) => {
        if (isFileExist(file.name)) {
          res.status(409).json({status: "error", message: `${file.name} already exist`});
        }

        return file;
      })
      .map(file => {
        const fileExtension = file.name.split(".").slice(-1)[0];
        const fileId = uuidv4();
        const fileName = `${fileId}.${fileExtension}`;
        writeFile(file, fileName, res);

        return fileName;
      });

    return filesNames;
  };

  /**
   * Update files by file name (fileName should be the same)
   */
  public updateFiles = async (files: fileUpload.FileArray, res: Response): Promise<string[]> => {
    const filesNames = Object.values(files)
    // use any due to error in library types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((file: any) => {
        if (!isFileExist(file.name)) {
          res.status(409).json({status: "error", message: `${file.name} not exist`});
          return;
        }

        return file;
      })
      .map(file => {
        writeFile(file, file.name, res);
        return file.name;
      });

    return filesNames;
  };

  /**
   * Delete files by id
   */
  public deleteFiles = async (filesIds: string[], res: Response): Promise<void> => {
    filesIds
      .map((fileName) => {
        if (!isFileExist(fileName)) {
          return res.status(409).json({status: "error", message: `${fileName} not exist`});
        }

        return fileName;
      })
      .forEach((fileId) => {
        removeFile(fileId as string, res);
      });
  };

}