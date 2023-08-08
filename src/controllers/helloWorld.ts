import { Request, Response } from "express";
import { HelloWorldDto } from "../Dtos";

// Placeholder code for this template
const get = async (_: Request, res: Response): Promise<void> => {
  res.status(200).send("Hello World");
};

const create = async (
  req: Request<any, any, HelloWorldDto>,
  res: Response
): Promise<void> => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
};

export const helloWorld = { get, create };
