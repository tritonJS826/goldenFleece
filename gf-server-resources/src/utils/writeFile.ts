import path from "path";
import {onError500} from "./onError500";
import {__dirname} from "../index";
import {FILES_DIRECTORY} from "../settings/FILES_DIRECTORY";
import {FileModel} from "../model/fileModel";
import {Response} from "express";

/**
 * Write file on hard drive
 */
export const writeFile = (file: FileModel, fileId: string, res: Response) => {
  const filepath = path.join(__dirname, FILES_DIRECTORY, fileId);
  file.mv(filepath, (err: Error) => onError500(err, res));
};

