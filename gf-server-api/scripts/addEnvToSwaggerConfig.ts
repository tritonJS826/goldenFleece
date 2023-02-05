import {config} from "dotenv";
import {readFileSync, writeFileSync, mkdirSync} from "fs";

config();

const GF_SERVER_API_HOST = process.env.GF_SERVER_API_HOST;
const GF_SERVER_API_PORT = process.env.GF_SERVER_API_PORT;

mkdirSync("autogenerated", {recursive: true});

const swaggerConfigurationTemplateString = readFileSync("static/swaggerConfigurationTemplate.json", "utf8");

const swaggerConfigurationTemplate = JSON.parse(swaggerConfigurationTemplateString);
swaggerConfigurationTemplate.servers[0].url = `${GF_SERVER_API_HOST}:${GF_SERVER_API_PORT}`;

const swaggerConfiguration = JSON.stringify(swaggerConfigurationTemplate);
writeFileSync("autogenerated/swaggerConfiguration.json", swaggerConfiguration);
