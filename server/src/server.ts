import dotenv from "dotenv";
import { createServer } from "http";

import socketService from "./services/socketService";
import app from "./app";

dotenv.config();

const server = createServer(app);
socketService(server);

server.listen(process.env.PORT || process.env.DEVELOPMENT_PORT, () => {
  console.log(`ACTIVE | ${process.env.PORT || process.env.DEVELOPMENT_PORT}`);
});
