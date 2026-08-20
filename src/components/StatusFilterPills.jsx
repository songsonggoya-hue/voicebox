import { STATUS_OPTIONS } from "../constants/brand";
import styles from "./StatusFilterPills.module.css";

const OPTIONS = ["전체", ...STATUS_OPTIONS];

export default function StatusFilterPills({ value, onChange }) {
  return (
    <div className={styles.pills} role="group" aria-label="처리상태 필터">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          className={`${styles.pill} ${value === option ? styles.active : ""}`}
          onClick={() => onChange(option)}
          aria-pressed={value === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
