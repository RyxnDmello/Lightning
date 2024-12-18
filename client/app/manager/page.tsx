import Collections from "@components/Manager/Collections";
import Controller from "@components/Manager/Controller";
import Output from "@components/Manager/Output";

export default function Manager() {
  return (
    <main id="manager">
      <Collections />
      <Controller />
      <Output />
    </main>
  );
}
