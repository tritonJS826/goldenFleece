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
 * @swagger
 * /resources:
 *   post:
 *     tags: [Resources]
 *     summary: Add a new file
 *     description: Create a new file
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
*/
resourcesRouter.post("/resource",
  fileUpload({createParentPath: true}),
  filesPayloadExists,
  resourceService.createFile,
);

/**
 * Update files by file name
 * @swagger
 * /resources:
 *   put:
 *     tags: [Resources]
 *     summary: Update a file
 *     description: Update a file
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
resourcesRouter.put("/resource",
  fileUpload({createParentPath: true}),
  filesPayloadExists,
  resourceService.updateFile,
);

/**
 * Delete files by file's id
 * @swagger
 * /resources:
 *   delete:
 *     tags: [Resources]
 *     summary: Delete a file
 *     description: Delete a file
 *     responses:
 *       200:
 *         description: OK.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
resourcesRouter.delete("/resource",
  resourceService.deleteFiles,
);
