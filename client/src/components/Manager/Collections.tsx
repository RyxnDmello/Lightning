import useFilterType from "../../hooks/collections/useFilterType";
import useFilterSearch from "../../hooks/collections/useFilterSearch";

import Search from "./Collections/Search";

import styles from "./Collections.module.scss";

export default function Collections() {
  const { type, menu, onSelectType, onToggleMenu } = useFilterType();
  const { onSetPrompt } = useFilterSearch();

  return (
    <section id="collection" className={styles.collection}>
      <Search
        ref={menu}
        type={type}
        onSearch={onSetPrompt}
        onSelectType={onSelectType}
        onToggleMenu={onToggleMenu}
      />
    </section>
  );
}
