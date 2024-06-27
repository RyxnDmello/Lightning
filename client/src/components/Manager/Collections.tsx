import Search from "./Collections/Search";

import styles from "./Collections.module.scss";

export default function Collections() {
  return (
    <section id="collection" className={styles.collection}>
      <Search onSwitch={() => {}} />
    </section>
  );
}
