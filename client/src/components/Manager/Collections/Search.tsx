import { forwardRef } from "react";

import { PROTOCOL } from "../../../hooks/collections/useFilterProtocol";

import { protocols } from "../../../models/Search";

import Protocol from "./Protocol";

import styles from "./Search.module.scss";

interface SearchProps {
  protocol: PROTOCOL;
  onSearch: (value: string) => void;
  onSelectProtocol: (protocol: PROTOCOL, styles: CSSModuleClasses) => void;
  onToggleMenu: (styles: CSSModuleClasses) => void;
}

const Search = forwardRef<HTMLMenuElement, SearchProps>(
  ({ protocol, onSearch, onToggleMenu, onSelectProtocol }, ref) => {
    return (
      <div className={styles.search}>
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search"
          maxLength={25}
          type="text"
        />

        <Protocol
          protocol={protocol}
          style={styles[`${protocol.toLowerCase()}`]}
          onClick={() => onToggleMenu(styles)}
        />

        <menu ref={ref} className={styles.menu}>
          {protocols.map((p) => {
            return (
              p !== protocol && (
                <Protocol
                  protocol={p as PROTOCOL}
                  onClick={() => onSelectProtocol(p as PROTOCOL, styles)}
                />
              )
            );
          })}
        </menu>
      </div>
    );
  }
);

export default Search;
