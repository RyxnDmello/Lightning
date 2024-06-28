import { forwardRef } from "react";

import { PROTOCOL } from "../../../hooks/collections/useFilterType";

import { types } from "../../../models/Search";

import styles from "./Search.module.scss";

interface SearchProps {
  type: PROTOCOL;
  onSearch: (value: string) => void;
  onSelectType: (type: PROTOCOL, styles: CSSModuleClasses) => void;
  onToggleMenu: (styles: CSSModuleClasses) => void;
}

const Search = forwardRef<HTMLMenuElement, SearchProps>(
  ({ type, onSearch, onToggleMenu, onSelectType }, ref) => {
    return (
      <div className={styles.search}>
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search"
          maxLength={25}
          type="text"
        />

        <p
          className={styles[`${type.toLowerCase()}`]}
          onClick={() => onToggleMenu(styles)}
        >
          {type}
        </p>

        <menu ref={ref} className={styles.menu}>
          {types.map((type) => (
            <p
              onClick={() => onSelectType(type as PROTOCOL, styles)}
              className={styles[`${type.toLowerCase()}`]}
            >
              {type}
            </p>
          ))}
        </menu>
      </div>
    );
  }
);

export default Search;
