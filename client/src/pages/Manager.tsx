import Collection from "../components/Manager/Collection";
import Controller from "../components/Manager/Controller";
import Output from "../components/Manager/Output";

import "../styles/manager.scss";

export default function Manager() {
  return (
    <main>
      <Collection />
      <Controller />
      <Output />
    </main>
  );
}
