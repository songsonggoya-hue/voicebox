import { Link } from "react-router-dom";
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import FieldChip from "./FieldChip";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = post.photo && !photoFailed;

  return (
    <Link to={`/posts/${post.id}`} className={styles.card}>
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
      <div className={styles.body}>
        <div className={styles.badgeRow}>
          <StatusBadge status={post.status} />
          <FieldChip field={post.field} />
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.content}</p>
        <div className={styles.meta}>
          <span>{post.author}</span>
          <span className={styles.dot}>·</span>
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
