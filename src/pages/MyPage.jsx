import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import StatusBadge from "../components/StatusBadge";
import FieldChip from "../components/FieldChip";
import styles from "./MyPage.module.css";

export default function MyPage() {
  const { user, loading, signOut } = useAuth();
  const { posts, deletePost } = usePosts();
  const navigate = useNavigate();
  const [tab, setTab] = useState("posts");

  useEffect(() => {
    if (!loading && !user) navigate("/login", { replace: true });
  }, [loading, user, navigate]);

  if (loading || !user) return null;

  const myPosts = posts.filter((post) => post.userId === user.id);
  const name = user.user_metadata?.full_name || user.email;
  const avatarUrl = user.user_metadata?.avatar_url;

  async function handleDelete(id) {
    if (!window.confirm("이 글을 삭제할까요?")) return;
    await deletePost(id);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>마이페이지</h1>

      <div className={styles.tabs}>
        <button
          type="button"
          className={`${styles.tab} ${tab === "posts" ? styles.tabActive : ""}`}
          onClick={() => setTab("posts")}
        >
          내가 쓴 글
        </button>
        <button
          type="button"
          className={`${styles.tab} ${tab === "info" ? styles.tabActive : ""}`}
          onClick={() => setTab("info")}
        >
          내 정보
        </button>
      </div>

      {tab === "posts" ? (
        myPosts.length === 0 ? (
          <p className={styles.empty}>아직 남긴 의견이 없어요.</p>
        ) : (
          <ul className={styles.postList}>
            {myPosts.map((post) => (
              <li key={post.id} className={styles.postItem}>
                <Link to={`/posts/${post.id}`} className={styles.postLink}>
                  <div className={styles.badgeRow}>
                    <StatusBadge status={post.status} />
                    <FieldChip field={post.field} />
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <span className={styles.postDate}>{post.date}</span>
                </Link>
                <div className={styles.postActions}>
                  <Link to={`/posts/${post.id}/edit`} className={styles.editButton}>
                    수정
                  </Link>
                  <button
                    type="button"
                    className={styles.deleteButton}
                    onClick={() => handleDelete(post.id)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )
      ) : (
        <div className={styles.infoCard}>
          {avatarUrl && (
            <img src={avatarUrl} alt="" className={styles.avatar} referrerPolicy="no-referrer" />
          )}
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>이름</span>
            <span>{name}</span>
          </div>
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>이메일</span>
            <span>{user.email}</span>
          </div>
          <button type="button" className={styles.signOutButton} onClick={signOut}>
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
}
