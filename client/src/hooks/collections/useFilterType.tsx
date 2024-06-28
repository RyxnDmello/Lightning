import { useState, useRef } from "react";

export type PROTOCOL = "ALL" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default function useFilterType() {
  const [type, setType] = useState<PROTOCOL>("ALL");
  const menu = useRef<HTMLMenuElement>(null);

  const onToggleMenu = (styles: CSSModuleClasses) => {
    if (menu.current?.classList.contains(styles.reveal)) {
      menu.current?.classList.remove(styles.reveal);
      menu.current?.classList.add(styles.hide);
      return;
    }

    menu.current?.classList.remove(styles.hide);
    menu.current?.classList.add(styles.reveal);
  };

  const onSelectType = (type: PROTOCOL, styles: CSSModuleClasses) => {
    menu.current?.classList.remove(styles.reveal);
    menu.current?.classList.add(styles.hide);
    setType(type);
  };

  return { type, menu, onSelectType, onToggleMenu };
}
