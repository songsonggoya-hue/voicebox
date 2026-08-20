import { createContext, useContext, useEffect, useState } from "react";
import { seedPosts } from "../data/seedPosts";
import { DEMO_AUTHOR_NAME } from "../constants/brand";

const STORAGE_KEY = "voicebox_posts_v1";

const PostsContext = createContext(null);

function loadStoredPosts() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function formatToday() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

export function PostsProvider({ children }) {
  const [storedPosts, setStoredPosts] = useState(loadStoredPosts);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedPosts));
  }, [storedPosts]);

  // 새로 쓴 글이 항상 맨 앞, 그다음 시안의 샘플 글 5건 순서.
  const posts = [...storedPosts, ...seedPosts];

  function addPost({ title, content, field, photo }) {
    const newPost = {
      id: `post-${Date.now()}`,
      title,
      content,
      field,
      status: "접수",
      author: DEMO_AUTHOR_NAME,
      date: formatToday(),
      photo: photo || null,
    };
    setStoredPosts((prev) => [newPost, ...prev]);
    return newPost.id;
  }

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const ctx = useContext(PostsContext);
  if (!ctx) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return ctx;
}
