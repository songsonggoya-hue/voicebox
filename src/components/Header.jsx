import { Link } from "react-router-dom";
import { ORG_NAME, ICON_PATH } from "../constants/brand";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <img src={ICON_PATH} alt="" className={styles.icon} />
        <span className={styles.orgName}>{ORG_NAME}</span>
      </Link>
    </header>
  );
}
