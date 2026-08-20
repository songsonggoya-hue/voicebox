import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldSelect from "../components/FieldSelect";
import PhotoUploadTile from "../components/PhotoUploadTile";
import { usePosts } from "../context/PostsContext";
import styles from "./WritePage.module.css";

export default function WritePage() {
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [field, setField] = useState("");
  const [photo, setPhoto] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !field) return;

    const newId = addPost({
      title: title.trim(),
      content: content.trim(),
      field,
      photo: photo?.previewUrl ?? null,
    });
    navigate(`/posts/${newId}`);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>의견 쓰기</h1>
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
          <label className={styles.label} htmlFor="content">
            내용
          </label>
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
          <FieldSelect
            id="field"
            value={field}
            onChange={setField}
            placeholder="분야 선택"
            required
          />
        </div>

        <div className={styles.field}>
          <span className={styles.label}>사진 (선택, 최대 1장)</span>
          <PhotoUploadTile value={photo} onChange={setPhoto} />
        </div>

        <button type="submit" className={styles.submit}>
          저장하기
        </button>
      </form>
    </div>
  );
}
