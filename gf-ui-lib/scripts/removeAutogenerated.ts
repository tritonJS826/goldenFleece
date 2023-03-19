import {exec, ExecException} from "child_process";

const errorHandler = (error: ExecException | null, stdout: string, stderr: string) => {
  if (error || stderr) {
    console.log(stdout);
    console.error(error, stderr);
  }
};

exec(
  "pnpm dlx rimraf node_modules build storyboook-static",
  errorHandler,
);