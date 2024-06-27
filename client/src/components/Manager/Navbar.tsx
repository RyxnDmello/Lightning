import Logo from "../common/Logo";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
}
