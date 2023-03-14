import path from "path";
import {Response} from "express";
import {onError500} from "./onError500";
import {__dirname} from "src/index";
import {FILES_DIRECTORY} from "src/settings/FILES_DIRECTORY";
import {FileModel} from "src/model/fileModel";

/**
 * Write file on hard drive
 */
export const writeFile = (file: FileModel, fileId: string, res: Response) => {
  const filepath = path.join(__dirname, FILES_DIRECTORY, fileId);
  file.mv(filepath, (err: Error) => onError500(err, res));
};

