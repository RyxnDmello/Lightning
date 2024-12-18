import { PROTOCOL } from "@interfaces/Collection";

interface ProtocolProps {
  style?: string;
  protocol: "ALL" | PROTOCOL;
  onClick: () => void;
}

export default function Protocol({ protocol, style, onClick }: ProtocolProps) {
  return (
    <p className={style} onClick={onClick}>
      {protocol}
    </p>
  );
}
