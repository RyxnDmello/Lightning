import dotenv from "dotenv";
import { createServer } from "http";
import app from "./app";

dotenv.config();

const server = createServer(app);

server.listen(process.env.PORT || process.env.DEVELOPMENT_PORT, () => {
  console.log(`ACTIVE | ${process.env.PORT || process.env.DEVELOPMENT_PORT}`);
});
