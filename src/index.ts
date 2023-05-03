import cors from "cors";
import express from "express";
import { connect, ConnectOptions } from "mongoose";
import { json } from "body-parser";
import "dotenv/config";

import routes from "./routes";

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGO_URL env var. Add it to .env file");
}

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(json());
app.use("/api", routes);

const mongooseConfig: ConnectOptions = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASSWORD,
};

connect(process.env.MONGODB_URI, mongooseConfig)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error(error);
  });
