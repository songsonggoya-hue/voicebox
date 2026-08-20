import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import StatusFilterPills from "../components/StatusFilterPills";
import FieldSelect from "../components/FieldSelect";
import PostGrid from "../components/PostGrid";
import { usePosts } from "../context/PostsContext";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { posts } = usePosts();
  const [status, setStatus] = useState("전체");
  const [field, setField] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const statusMatch = status === "전체" || post.status === status;
      const fieldMatch = field === "" || post.field === field;
      return statusMatch && fieldMatch;
    });
  }, [posts, status, field]);

  return (
    <>
      <Hero />
      <section className={styles.filters}>
        <StatusFilterPills value={status} onChange={setStatus} />
        <FieldSelect value={field} onChange={setField} placeholder="분야 전체" />
      </section>
      <div className={styles.listWrap}>
        <h2 className={styles.listTitle}>
          최근 남겨진 의견 {filteredPosts.length}건
        </h2>
        <PostGrid posts={filteredPosts} />
      </div>
    </>
  );
}
