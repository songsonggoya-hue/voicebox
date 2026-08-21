import { useState } from "react";
import FieldSelect from "./FieldSelect";
import PhotoUploadTile from "./PhotoUploadTile";
import styles from "./PostForm.module.css";

export default function PostForm({
  initialTitle = "",
  initialContent = "",
  initialField = "",
  initialPhotoUrl = null,
  submitLabel,
  submittingLabel,
  onSubmit,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [field, setField] = useState(initialField);
  const [photo, setPhoto] = useState(
    initialPhotoUrl ? { file: null, previewUrl: initialPhotoUrl } : null,
  );
  const [submitting, setSubmitting] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  async function handleAiAssist() {
    const draft = content.trim() || title.trim();
    if (!draft) {
      window.alert("먼저 어떤 내용인지 간단히 적어주세요.");
      return;
    }

    setAiLoading(true);
    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ draft }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "AI 작성도우미 호출에 실패했습니다.");
      }
      setTitle(data.title);
      setContent(data.content);
      setField(data.category);
    } catch (err) {
      window.alert(err.message || "AI 작성도우미 호출에 실패했습니다.");
    } finally {
      setAiLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !field || submitting) return;

    setSubmitting(true);
    try {
      await onSubmit({
        title: title.trim(),
        content: content.trim(),
        field,
        photoFile: photo?.file ?? null,
        removePhoto: Boolean(initialPhotoUrl) && !photo,
      });
    } catch {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="title">
          제목
        </label>
        <input
          id="title"
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="어떤 불편이나 제안인가요?"
          required
        />
      </div>

      <div className={styles.field}>
        <div className={styles.labelRow}>
          <label className={styles.label} htmlFor="content">
            내용
          </label>
          <button
            type="button"
            className={styles.aiButton}
            onClick={handleAiAssist}
            disabled={aiLoading}
          >
            {aiLoading ? "AI가 다듬는 중..." : "✨ AI 작성도우미"}
          </button>
        </div>
        <textarea
          id="content"
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="언제, 어디서, 무엇이 불편한지 적어주세요."
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="field">
          분야
        </label>
        <FieldSelect id="field" value={field} onChange={setField} placeholder="분야 선택" required />
      </div>

      <div className={styles.field}>
        <span className={styles.label}>사진 (선택, 최대 1장)</span>
        <PhotoUploadTile value={photo} onChange={setPhoto} />
      </div>

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? submittingLabel : submitLabel}
      </button>
    </form>
  );
}
