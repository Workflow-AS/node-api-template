import { Request, Response } from "express";

// Placeholder code for this template
const get = async (_: Request, res: Response): Promise<void> => {
  res.status(200).send("Hello World");
};

export const helloWorld = { get };
