import path from "path";
import fs from "fs";
import {Response} from "express";
import {FILES_DIRECTORY} from "src/settings/FILES_DIRECTORY";
import {onError500} from "src/utils/onError500";
import {nodeError} from "src/model/nodeError";

/**
 * Remove file by file name
 */
export const removeFile = (fileId: string, res: Response) => {
  const filepath = path.join(__dirname, FILES_DIRECTORY, fileId);
  fs.unlink(filepath, (err: nodeError) => onError500(err, res));
};
