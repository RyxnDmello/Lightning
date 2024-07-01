import { useRef } from "react";

export default function useFolder() {
  const folder = useRef<HTMLDivElement>(null);

  const onToggleFolder = (styles: CSSModuleClasses) => {
    if (folder.current?.classList.contains(styles.expand)) {
      folder.current.classList.remove(styles.expand);
      folder.current.classList.add(styles.collapse);
      return;
    }

    folder.current?.classList.remove(styles.collapse);
    folder.current?.classList.add(styles.expand);
  };

  return { folder, onToggleFolder };
}
