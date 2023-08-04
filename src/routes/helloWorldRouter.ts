import express from "express";
import { helloWorld } from "../controllers/helloWorld";

const helloWorldRouter = express.Router();

helloWorldRouter.get("/", helloWorld.get);

export { helloWorldRouter };
