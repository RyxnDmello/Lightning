import useFolder from "../../../hooks/collections/useFolder";

import FolderIcon from "../../../images/folder/folder.svg";
import RenameIcon from "../../../images/folder/rename.svg";
import DeleteIcon from "../../../images/folder/delete.svg";
import AddIcon from "../../../images/folder/add.svg";

import Request from "./Request";

import styles from "./Folder.module.scss";

interface FolderProps {
  name: string;
}

export default function Folder({ name }: FolderProps) {
  const { folder, onToggleFolder } = useFolder();

  return (
    <div className={styles.folder}>
      <div className={styles.metadata} onClick={() => onToggleFolder(styles)}>
        <div>
          <img src={FolderIcon} />
          <p>{name}</p>
        </div>

        <div>
          <img src={RenameIcon} />
          <img src={AddIcon} />
          <img src={DeleteIcon} />
        </div>
      </div>

      <div ref={folder} className={styles.requests}>
        <div>
          {Array.from({ length: 5 }, () => (
            <Request protocol={"ALL"} name="Request" />
          ))}
        </div>
      </div>
    </div>
  );
}
