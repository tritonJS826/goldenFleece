import path from "path";
import fs from "fs";

const GF_SERVER_API_PATH = path.resolve(__dirname, "../gf-server-api");
const GF_SERVER_RESOURCES_PATH = path.resolve(__dirname, "../gf-server-resources");
const GF_WEBAPP_PATH = path.resolve(__dirname, "../gf-webapp");
const GF_WEBAPP_ADMIN_PATH = path.resolve(__dirname, "../gf-webapp-admin");
const GF_UI_LIB_PATH = path.resolve(__dirname, "../gf-ui-lib");

const MODULES_PATHS = [
  GF_SERVER_API_PATH,
  GF_SERVER_RESOURCES_PATH,
  GF_WEBAPP_PATH,
  GF_WEBAPP_ADMIN_PATH,
  GF_UI_LIB_PATH,
];

const generateEnvIfNotExist = (modulePath: string) => {
  const envPath = path.resolve(modulePath, ".env");
  const envExamplePath = path.resolve(modulePath, "env.example");

  const isEnvExist = fs.existsSync(envPath);
  const isEnvExampleExist = fs.existsSync(envExamplePath);

  if (!isEnvExampleExist) {
    console.error(`env.example file by address ${envExamplePath} is not exist`);
    return;
  }

  if (isEnvExist) {
    console.log(`.env file by address ${envPath} already exist`);
    return;
  }

  if (isEnvExampleExist && !isEnvExist) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log(`.env file by address ${envPath} successfully created`);
  }
};


console.log(`Generating .env files in modules: \n${MODULES_PATHS.join("\n")} \n`);

MODULES_PATHS.forEach(generateEnvIfNotExist);