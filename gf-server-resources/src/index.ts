import express from "express";
import dotenv from "dotenv";
import path from "path";

import {sandboxRouter} from "./routes/sandboxRoute";
import {resourcesRouter} from "./routes/resourcesRoute";

dotenv.config({path: "./.env"});
export const __dirname = path.dirname("./");
const port = process.env.WRITE_SERVER_PORT;

const app = express();


// Temporal sandbox page
app.use(sandboxRouter);
// Resources service api
app.use(resourcesRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));