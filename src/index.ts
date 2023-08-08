import express, { Express } from "express";
import bodyParser from "body-parser";
import "./config/env";
import { DBConnection } from "./config/database";
import { routes } from "./routes";

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/v1", routes);

const start = async (): Promise<void> => {
  try {
    await DBConnection.sync();
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running on PORT: ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
