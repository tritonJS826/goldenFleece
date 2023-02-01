import {Response, Request} from "express";

export const checkStatusCallback = async (req: Request, res: Response): Promise<void> => {
  res.status(200).send("Server works");
};
