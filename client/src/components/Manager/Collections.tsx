import useFilterProtocol from "../../hooks/collections/useFilterProtocol";
import useFilterSearch from "../../hooks/collections/useFilterSearch";

import Search from "./Collections/Search";
import Folder from "./Collections/Folder";

import styles from "./Collections.module.scss";

export default function Collections() {
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
            {Array.from({ length: 10 }, () => (
              <Folder name={"Folder"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
