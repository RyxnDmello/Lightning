import FolderIcon from "../../../images/manager/folder.svg";
import DeleteIcon from "../../../images/manager/delete.svg";
import AddIcon from "../../../images/manager/add.svg";

import Request from "./Request";

import styles from "./Folder.module.scss";

interface FolderProps {
  name: string;
}

export default function Folder({ name }: FolderProps) {
  return (
    <div className={styles.folder}>
      <div className={styles.metadata}>
        <div>
          <img src={FolderIcon} />
          <p>{name}</p>
        </div>

        <div>
          <img src={AddIcon} />
          <img src={DeleteIcon} />
        </div>
      </div>

      <div className={styles.requests}>
        <div>
          {Array.from({ length: 5 }, () => (
            <Request protocol={"ALL"} name="Request" />
          ))}
        </div>
      </div>
    </div>
  );
}
