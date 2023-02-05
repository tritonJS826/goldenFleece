import {config} from "dotenv";

config();

export const PORT = process.env.GF_SERVER_API_PORT;

export const listenServer = (): void => {
  console.log(`Server started on PORT ${PORT}`);
};