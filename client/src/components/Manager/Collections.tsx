import { Socket } from "socket.io-client";

import useFilterProtocol from "../../hooks/collections/useFilterProtocol";
import useFilterSearch from "../../hooks/collections/useFilterSearch";

import Search from "./Collections/Search";
import Folder from "./Collections/Folder";

import styles from "./Collections.module.scss";
import useCollections from "../../hooks/collections/useCollections";

interface CollectionsProps {
  socket: Socket;
}

export default function Collections({ socket }: CollectionsProps) {
  const { collections } = useCollections(socket);

  const { protocol, menu, onSelectProtocol, onToggleMenu } =
    useFilterProtocol();

  const { onSetPrompt } = useFilterSearch();

  return (
    <section id="collection" className={styles.collection}>
      <div>
        <Search
          ref={menu}
          protocol={protocol}
          onSearch={onSetPrompt}
          onToggleMenu={onToggleMenu}
          onSelectProtocol={onSelectProtocol}
        />

        <div className={styles.folders}>
          <div>
            {collections.map((folder) => (
              <Folder key={folder._id} {...folder} protocol={protocol} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
