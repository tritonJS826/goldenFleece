import {ExecException} from "child_process";

export const errorHandler = (error: ExecException | null, stdout: string, stderr: string) => {
  if (error || stderr) {
    console.log(stdout);
    console.error(error, stderr);
  }
};
