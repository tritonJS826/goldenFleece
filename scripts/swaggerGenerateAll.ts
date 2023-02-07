import {exec, ExecException} from "child_process";

const errorHandler = (error: ExecException | null, stdout: string, stderr: string) => {
  if (error || stderr) {
    console.log(stdout);
    console.error(error, stderr);
  }
};

exec(
  "pnpm run \
    --filter gf-server-api \
    swagger:generateSpec",
  errorHandler,
);

exec(
  "pnpm run \
    --filter gf-server-resources \
    swagger:generateSpec",
  errorHandler,
);

exec(
  "pnpm run \
    --filter gf-webapp \
    --filter gf-webapp-admin \
    swagger:generate_gf-server-api",
  errorHandler,
);

exec(
  "pnpm run \
    --filter gf-webapp \
    --filter gf-webapp-admin \
    swagger:generate_gf-server-resources",
  errorHandler,
);