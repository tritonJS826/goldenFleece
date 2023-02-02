import path from "path";
import fs from "fs";
import {FILES_DIRECTORY} from "../settings/FILES_DIRECTORY";
import {onError500} from "./onError500";
import {nodeError} from "../model/nodeError";
import {Response} from "express";

/**
 * Remove file by file name
 */
export const removeFile = (fileId: string, res: Response) => {
  const filepath = path.join(__dirname, FILES_DIRECTORY, fileId);
  fs.unlink(filepath, (err: nodeError) => onError500(err, res));
};
