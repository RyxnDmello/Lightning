import { PROTOCOL } from "../../../hooks/collections/useFilterProtocol";

interface ProtocolProps {
  style?: string;
  protocol: PROTOCOL;
  onClick: () => void;
}

export default function Protocol({ protocol, style, onClick }: ProtocolProps) {
  return (
    <p className={style} onClick={onClick}>
      {protocol}
    </p>
  );
}
