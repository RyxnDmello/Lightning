import useToggleFolder from "../../../hooks/collections/useToggleFolder";

import PROTOCOL from "../../../types/Protocol";

import { Request as _ } from "../../../interfaces/Collection";

import FolderIcon from "../../../images/folder/folder.svg";
import RenameIcon from "../../../images/folder/rename.svg";
import DeleteIcon from "../../../images/folder/delete.svg";
import AddIcon from "../../../images/folder/add.svg";

import Request from "./Request";

import styles from "./Folder.module.scss";

interface FolderProps {
  name: string;
  requests: _[];
  protocol: "ALL" | PROTOCOL;
}

export default function Folder({ name, requests, protocol }: FolderProps) {
  const { folder, onToggleFolder } = useToggleFolder();

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
          {requests.map((request) => {
            if (protocol !== "ALL" && protocol !== request.protocol) return;
            return <Request key={request._id} {...request} />;
          })}
        </div>
      </div>
    </div>
  );
}
