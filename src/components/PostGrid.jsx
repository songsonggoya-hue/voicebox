import PostCard from "./PostCard";
import styles from "./PostGrid.module.css";

export default function PostGrid({ posts }) {
  if (posts.length === 0) {
    return <p className={styles.empty}>해당 조건에 맞는 의견이 없어요.</p>;
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
