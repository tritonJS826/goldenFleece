import express, {Express} from "express";
import {config} from "dotenv";
import {PORT, listenServer} from "./utils/listenServer";
import {checkStatusCallback} from "./utils/checkStatusCallback";
import {router} from "./routes/routes";
import swaggerUi from "swagger-ui-express";
import {apiSpec} from "../swagger";
import cors from "cors";

config();
const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/swagger.json", (_req, res) => res.json(apiSpec));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(apiSpec));

// App status check
app.get("/", checkStatusCallback);

// App routing
app.use(router);

// App listening for connections on port
app.listen(PORT, listenServer);


