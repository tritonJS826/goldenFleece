import express from "express";
import fileUpload from "express-fileupload";
import {filesPayloadExists} from "../middleware/filesPayloadExists";
import {resourceService} from "../service/resourceService/resourceService";

/**
 * Express router for resources api
 */
export const resourcesRouter = express.Router();

/**
 * Create new files
 */
resourcesRouter.post("/resource",
  fileUpload({createParentPath: true}),
  filesPayloadExists,
  resourceService.createFile,
);

/**
 * Update files by file name
 */
resourcesRouter.put("/resource",
  fileUpload({createParentPath: true}),
  filesPayloadExists,
  resourceService.updateFile,
);

/**
 * Delete files by file's id
 */
resourcesRouter.delete("/resource",
  resourceService.deleteFiles,
);
