import {exec} from "child_process";
import {errorHandler} from "./utils/errorHandler";

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