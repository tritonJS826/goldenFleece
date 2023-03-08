import {FirebaseMailService} from "./firebaseMailService";
import {GMailService} from "./GMailService";
import {config} from "dotenv";
import {MailServiceInterface} from "./MailServiceInterface";

config();

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

export const mailService: MailServiceInterface = isProd
  ? new FirebaseMailService()
  : new GMailService();

