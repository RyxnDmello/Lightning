"use client";

import useCollections from "@hooks/collections/useCollections";
import useFilterSearch from "@hooks/collections/useFilterSearch";
import useFilterProtocol from "@hooks/collections/useFilterProtocol";

import Search from "./Collections/Search";
import Folder from "./Collections/Folder";

import styles from "./Collections.module.scss";

export default function Collections() {
  const { collections } = useCollections();

  const { protocol, menu, onSelectProtocol, onToggleMenu } =
    useFilterProtocol();

  const { onSetPrompt } = useFilterSearch();

  return (
    <section id="collection" className={styles.collection}>
      <div>
        <Search
          onSelect={onSelectProtocol}
          onToggle={onToggleMenu}
          onSearch={onSetPrompt}
          protocol={protocol}
          ref={menu}
        />

        <div className={styles.folders}>
          <div>
            {collections.map((folder) => {
              return <Folder key={folder.id} {...folder} protocol={protocol} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
