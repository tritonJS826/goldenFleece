import {FirebaseMailService} from "src/service/mailService/firebaseMailService";
import {GMailService} from "src/service/mailService/GMailService";
import {config} from "dotenv";
import {MailServiceInterface} from "src/service/mailService/MailServiceInterface";

config();

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

export const mailService: MailServiceInterface = isProd
  ? new FirebaseMailService()
  : new GMailService();

