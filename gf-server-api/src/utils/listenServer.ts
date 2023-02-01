import {config} from "dotenv";

config();

export const PORT = process.env.PORT;

export const listenServer = (): void => {
  console.log(`Server started on PORT ${PORT}`);
};