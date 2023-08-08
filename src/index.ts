import express, { Express } from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json";
import "./config/env";
import { DBConnection } from "./config/database";
import { routes } from "./routes";

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/v1", routes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));

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
