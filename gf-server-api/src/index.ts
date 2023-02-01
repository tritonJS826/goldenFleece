import express, {Express} from "express";
import {config} from "dotenv";
import {PORT, listenServer} from "./utils/listenServer";
import {checkStatusCallback} from "./utils/checkStatusCallback";
import {router} from "./routes/routes";

config();
const app: Express = express();

// App status check
app.get("/", checkStatusCallback);

// App routing
app.use(router);

// App listening for connections on port
app.listen(PORT, listenServer);


