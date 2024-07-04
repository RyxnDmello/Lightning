import { useState, useEffect } from "react";
import { Socket } from "socket.io-client";

import { Collection } from "../../interfaces/Collection";

export default function useCollections(socket: Socket) {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchFolders = () => {
      socket.on("collections", (data) => {
        setCollections(data);
      });
    };

    fetchFolders();
  }, [socket]);

  return { collections };
}
