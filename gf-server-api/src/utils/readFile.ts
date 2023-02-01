import fs from "fs";

export const readFile = async (pathToFile: string): Promise<string> => {
  return fs.promises.readFile(pathToFile, "utf8");
};