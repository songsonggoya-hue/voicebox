import { ORG_NAME, ORG_TAGLINE } from "../constants/brand";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.org}>{ORG_NAME}</span>
      {ORG_TAGLINE}
    </footer>
  );
}
