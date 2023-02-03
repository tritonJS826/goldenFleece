import {nodeError} from "../model/nodeError";
import {Response} from "express";

/**
 * Response on 500 error
 */
export const onError500 = (err: nodeError, res: Response) => {
  if (err) {
    return res.status(500).json({status: "error", message: err});
  }
};
