import Navbar from "../components/Manager/Navbar";
import Collections from "../components/Manager/Collections";
import Controller from "../components/Manager/Controller";
import Output from "../components/Manager/Output";

import "../styles/manager.scss";

export default function Manager() {
  return (
    <main>
      <Navbar />
      <Collections />
      <Controller />
      <Output />
    </main>
  );
}
