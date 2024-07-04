import dotenv from "dotenv";
import { Server as HttpServer } from "http";
import { Server } from "socket.io";

import { collections } from "../data/collections.json";

dotenv.config();

const socketService = (server: HttpServer) => {
  const io: Server = new Server(server, {
    cors: {
      origin: process.env.CORS,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`User ID: ${socket.id}`);

    socket.emit("collections", collections);
  });
};

export default socketService;
