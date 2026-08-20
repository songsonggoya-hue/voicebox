import styles from "./StatusBadge.module.css";

// design.md: 접수/처리중/완료 3가지 색 매핑 고정. 4번째 상태를 새로 만들지 않는다.
const STATUS_CLASS = {
  접수: styles.statusReceived,
  처리중: styles.statusInProgress,
  완료: styles.statusDone,
};

export default function StatusBadge({ status }) {
  return (
    <span className={`${styles.badge} ${STATUS_CLASS[status] ?? ""}`}>
      {status}
    </span>
  );
}
