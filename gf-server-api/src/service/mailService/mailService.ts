import {FirebaseMailService} from "./firebaseMailService";
import {StubMailService} from "./stubMailService";
import {config} from "dotenv";

config();

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === "production";

export const mailService = isProd ? new FirebaseMailService() : new StubMailService();