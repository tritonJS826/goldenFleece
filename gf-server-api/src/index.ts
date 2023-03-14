import express, {Express} from "express";
import {config} from "dotenv";
import swaggerUi from "swagger-ui-express";
import {apiSpec} from "swagger";
import cors from "cors";
import {PORT, listenServer} from "src/utils/listenServer";
import {checkStatusCallback} from "src/utils/checkStatusCallback";
import {roomsRouter} from "src/routes/roomRoutes";
import {mailRouter} from "src/routes/mailRoutes";

config();
const app: Express = express();

app.use(cors());
app.use(express.json());

app.get("/swagger.json", (_req, res) => res.json(apiSpec));
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(apiSpec));

// App status check
app.get("/", checkStatusCallback);

// App routing
app.use(roomsRouter);
app.use(mailRouter);

// App listening for connections on port
app.listen(PORT, listenServer);