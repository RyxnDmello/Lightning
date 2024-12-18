import Image from "next/image";

import type { PROTOCOL } from "@interfaces/Collection";

import styles from "./Request.module.scss";

interface RequestProps {
  readonly protocol: PROTOCOL;
  readonly name: string;
}

export default function Request({ protocol, name }: RequestProps) {
  return (
    <div className={styles.request}>
      <div>
        <p className={styles[protocol.toLowerCase()]}>{protocol}</p>
        <p>{name}</p>
      </div>

      <div>
        <Image
          onClick={undefined}
          src="/request/rename.svg"
          alt="delete"
          height={0}
          width={0}
        />

        <Image
          onClick={undefined}
          src="/request/delete.svg"
          alt="delete"
          height={0}
          width={0}
        />
      </div>
    </div>
  );
}
