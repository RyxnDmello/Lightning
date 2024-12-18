import { forwardRef } from "react";

import type { PROTOCOL } from "@interfaces/Collection";

import Protocol from "./Protocol";

import styles from "./Search.module.scss";

interface SearchProps {
  protocol: "ALL" | PROTOCOL;
  onSearch: (value: string) => void;
  onToggle: (reveal: string, hide: string) => void;
  onSelect: (protocol: PROTOCOL, reveal: string, hide: string) => void;
}

const protocols: readonly ("ALL" | PROTOCOL)[] = [
  "ALL",
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
];

const Search = forwardRef<HTMLMenuElement, SearchProps>(
  ({ protocol, onSearch, onToggle, onSelect }, ref) => {
    return (
      <div className={styles.search}>
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search"
          maxLength={25}
          type="text"
        />

        <Protocol
          onClick={() => onToggle(styles.reveal, styles.hide)}
          style={styles[`${protocol.toLowerCase()}`]}
          protocol={protocol}
        />

        <menu ref={ref} className={styles.menu}>
          {protocols.map((type) => {
            if (type === protocol) return;

            return (
              <Protocol
                key={type}
                protocol={type as PROTOCOL}
                onClick={() =>
                  onSelect(type as PROTOCOL, styles.reveal, styles.hide)
                }
              />
            );
          })}
        </menu>
      </div>
    );
  }
);

export default Search;
