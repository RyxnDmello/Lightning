import { PROTOCOL } from "../../../hooks/collections/useFilterProtocol";

import styles from "./Request.module.scss";

interface RequestProps {
  protocol: PROTOCOL;
  name: string;
}

export default function Request({ protocol, name }: RequestProps) {
  return (
    <div className={styles.request}>
      <p className={styles[protocol.toLowerCase()]}>{protocol}</p>
      <p>{name}</p>
    </div>
  );
}
