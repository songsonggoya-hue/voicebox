import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { usePosts } from "../context/PostsContext";
import { useAuth } from "../context/AuthContext";
import styles from "./WritePage.module.css";

export default function EditPostPage() {
  const { id } = useParams();
  const { posts, updatePost } = usePosts();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (!loading && !user) navigate("/login", { replace: true });
  }, [loading, user, navigate]);

  if (loading || !user) return null;

  if (!post) {
    return (
      <div className={styles.page}>
        <p>해당 의견을 찾을 수 없어요.</p>
      </div>
    );
  }

  if (post.userId !== user.id) {
    return (
      <div className={styles.page}>
        <p>본인이 쓴 글만 수정할 수 있어요.</p>
      </div>
    );
  }

  async function handleSubmit(values) {
    await updatePost(post.id, values);
    navigate(`/posts/${post.id}`);
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>의견 수정</h1>
      <PostForm
        initialTitle={post.title}
        initialContent={post.content}
        initialField={post.field}
        initialPhotoUrl={post.photo}
        submitLabel="수정하기"
        submittingLabel="수정 중..."
        onSubmit={handleSubmit}
      />
    </div>
  );
}
