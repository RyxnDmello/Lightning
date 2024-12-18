import Image from "next/image";

import type { PROTOCOL } from "@interfaces/Collection";
import { Request as Req } from "@interfaces/Collection";

import useToggleFolder from "@hooks/collections/useToggleFolder";

import Request from "./Request";

import styles from "./Folder.module.scss";

interface FolderProps {
  name: string;
  requests: Req[];
  protocol: "ALL" | PROTOCOL;
}

export default function Folder({ name, requests, protocol }: FolderProps) {
  const { folder, onToggleFolder } = useToggleFolder();

  return (
    <div className={styles.folder}>
      <div className={styles.details} onClick={() => onToggleFolder(styles)}>
        <div>
          <Image
            onClick={undefined}
            src="/folder/folder.svg"
            alt="folder"
            height={0}
            width={0}
          />

          <p>{name}</p>
        </div>

        <div>
          <Image
            onClick={undefined}
            src="/folder/rename.svg"
            alt="rename"
            height={0}
            width={0}
          />

          <Image
            onClick={undefined}
            src="/folder/delete.svg"
            alt="delete"
            height={0}
            width={0}
          />

          <Image
            onClick={undefined}
            src="/folder/add.svg"
            alt="add"
            height={0}
            width={0}
          />
        </div>
      </div>

      <div ref={folder} className={styles.requests}>
        <div>
          {requests.map((request) => {
            if (protocol !== "ALL" && protocol !== request.protocol) return;
            return <Request key={request.id} {...request} />;
          })}
        </div>
      </div>
    </div>
  );
}
