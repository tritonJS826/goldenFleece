import fs from "fs";

export const writeFile = async (pathToFile: string, data: string) => {
  return fs.promises.writeFile(pathToFile, data);
};