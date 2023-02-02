import express from "express";
import {sandboxService} from "../service/sandboxService/sandboxService";

/**
 * Express router for sandbox
 */
export const sandboxRouter = express.Router();

/**
 * Return test sandbox page
 */
sandboxRouter.get("/", sandboxService.getSandboxHTML);