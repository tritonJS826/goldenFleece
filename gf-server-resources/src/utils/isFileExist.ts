import path from "path";
import fs from "fs";
import {__dirname} from "../index";

/**
 * Check is file exist
 */
export const isFileExist = (fileName: string) => {
  const filepath = path.join(__dirname, "files", fileName);
  return fs.existsSync(filepath);
};
