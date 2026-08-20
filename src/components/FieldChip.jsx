import styles from "./FieldChip.module.css";

export default function FieldChip({ field }) {
  return <span className={styles.chip}>{field}</span>;
}
