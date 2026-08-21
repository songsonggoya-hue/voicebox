import { useEffect, useRef } from "react";
import styles from "./PhotoUploadTile.module.css";

// 사진 첨부는 선택 · 최대 1장. value는 { file, previewUrl } 또는 null.
export default function PhotoUploadTile({ value, onChange }) {
  const inputRef = useRef(null);
  const previousUrlRef = useRef(null);

  useEffect(() => {
    return () => {
      if (previousUrlRef.current) {
        URL.revokeObjectURL(previousUrlRef.current);
      }
    };
  }, []);

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (previousUrlRef.current) {
      URL.revokeObjectURL(previousUrlRef.current);
    }
    const previewUrl = URL.createObjectURL(file);
    previousUrlRef.current = previewUrl;
    onChange({ file, previewUrl });
  }

  function handleRemove(e) {
    e.stopPropagation();
    if (previousUrlRef.current) {
      URL.revokeObjectURL(previousUrlRef.current);
      previousUrlRef.current = null;
    }
    onChange(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.tile}
        onClick={() => inputRef.current?.click()}
        aria-label="사진 추가"
      >
        {value ? (
          <>
            <img src={value.previewUrl} alt="첨부한 사진 미리보기" className={styles.preview} />
            <span
              className={styles.remove}
              role="button"
              tabIndex={0}
              onClick={handleRemove}
              aria-label="사진 삭제"
            >
              ×
            </span>
          </>
        ) : (
          <span className={styles.placeholder}>
            <span className={styles.plus} aria-hidden="true">
              +
            </span>
            사진 추가
          </span>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={handleFileChange}
      />
      <p className={styles.hint}>사진은 저장 시 서버에 업로드돼요.</p>
    </div>
  );
}
