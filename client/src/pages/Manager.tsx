import { Socket, io } from "socket.io-client";

import Navbar from "../components/Manager/Navbar";
import Collections from "../components/Manager/Collections";
import Controller from "../components/Manager/Controller";
import Output from "../components/Manager/Output";

import "../styles/manager.scss";

const socket: Socket = io(import.meta.env.VITE_SERVER_API);

export default function Manager() {
  return (
    <main>
      <Navbar />
      <Collections socket={socket} />
      <Controller />
      <Output />
    </main>
  );
}
