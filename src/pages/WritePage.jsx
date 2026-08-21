import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import styles from "./WritePage.module.css";

export default function WritePage() {
  const { addPost } = usePosts();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/login", { replace: true });
  }, [loading, user, navigate]);

  if (loading || !user) return null;

  async function handleSubmit(values) {
    const newId = await addPost(values);
    navigate(`/posts/${newId}`);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>의견 쓰기</h1>
      <PostForm submitLabel="저장하기" submittingLabel="저장 중..." onSubmit={handleSubmit} />
    </div>
  );
}
