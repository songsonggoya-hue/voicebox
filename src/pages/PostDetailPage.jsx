import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import FieldChip from "../components/FieldChip";
import { usePosts } from "../context/PostsContext";
import styles from "./PostDetailPage.module.css";

export default function PostDetailPage() {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((p) => p.id === id);
  const [photoFailed, setPhotoFailed] = useState(false);

  if (!post) {
    return (
      <div className={styles.page}>
        <p className={styles.notFound}>해당 의견을 찾을 수 없어요.</p>
        <Link to="/" className={styles.backLink}>
          ← 목록으로
        </Link>
      </div>
    );
  }

  const showPhoto = post.photo && !photoFailed;

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.backLink}>
        ← 목록으로
      </Link>

      {showPhoto ? (
        <img
          src={post.photo}
          alt=""
          className={styles.photo}
          onError={() => setPhotoFailed(true)}
        />
      ) : (
        <div className={styles.photoEmpty} aria-hidden="true" />
      )}

      <div className={styles.badgeRow}>
        <StatusBadge status={post.status} />
        <FieldChip field={post.field} />
      </div>

      <h1 className={styles.title}>{post.title}</h1>

      <div className={styles.meta}>
        <span>{post.author}</span>
        <span className={styles.dot}>·</span>
        <span>{post.date}</span>
      </div>

      <p className={styles.content}>{post.content}</p>
    </div>
  );
}
