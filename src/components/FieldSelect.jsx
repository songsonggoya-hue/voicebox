import { FIELD_OPTIONS } from "../constants/brand";
import styles from "./FieldSelect.module.css";

export default function FieldSelect({
  value,
  onChange,
  placeholder = "분야 선택",
  required = false,
  id,
}) {
  return (
    <select
      id={id}
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      <option value="">{placeholder}</option>
      {FIELD_OPTIONS.map((field) => (
        <option key={field} value={field}>
          {field}
        </option>
      ))}
    </select>
  );
}
