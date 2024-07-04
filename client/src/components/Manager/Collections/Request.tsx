import PROTOCOL from "../../../types/Protocol";

import DeleteIcon from "../../../images/request/delete.svg";
import RenameIcon from "../../../images/request/rename.svg";

import styles from "./Request.module.scss";

interface RequestProps {
  protocol: PROTOCOL;
  name: string;
}

export default function Request({ protocol, name }: RequestProps) {
  return (
    <div className={styles.request}>
      <div>
        <p className={styles[protocol.toLowerCase()]}>{protocol}</p>
        <p>{name}</p>
      </div>

      <div>
        <img src={RenameIcon} />
        <img src={DeleteIcon} />
      </div>
    </div>
  );
}
