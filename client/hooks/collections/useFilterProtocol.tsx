import { useState, useRef } from "react";

import type { PROTOCOL } from "@interfaces/Collection";

export default function useFilterProtocol() {
  const [protocol, setProtocol] = useState<"ALL" | PROTOCOL>("ALL");
  const menu = useRef<HTMLMenuElement>(null);

  const onToggleMenu = (reveal: string, hide: string) => {
    if (menu.current?.classList.contains(reveal)) {
      menu.current?.classList.remove(reveal);
      menu.current?.classList.add(hide);
      return;
    }

    menu.current?.classList.remove(hide);
    menu.current?.classList.add(reveal);
  };

  const onSelectProtocol = (type: PROTOCOL, reveal: string, hide: string) => {
    menu.current?.classList.remove(reveal);
    menu.current?.classList.add(hide);
    setProtocol(type);
  };

  return { protocol, menu, onSelectProtocol, onToggleMenu };
}
