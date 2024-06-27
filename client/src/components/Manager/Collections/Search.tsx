import { types } from "../../../models/Search";

import styles from "./Search.module.scss";

interface SearchProps {
  type?: "ALL" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  onSwitch: () => void;
}

export default function Search({ type = "ALL", onSwitch }: SearchProps) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" maxLength={25} />

      <p className={styles[`${type.toLowerCase()}`]} onClick={onSwitch}>
        {type}
      </p>

      <menu className={styles.menu}>
        {types.map((type) => (
          <p className={styles[`${type.toLowerCase()}`]}>{type}</p>
        ))}
      </menu>
    </div>
  );
}
