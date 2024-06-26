import dotenv from "dotenv";
import express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

export default app;
