import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { DEMO_AUTHOR_NAME } from "../constants/brand";

const PostsContext = createContext(null);

function formatDate(isoString) {
  const d = new Date(isoString);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
}

function mapRow(row) {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    field: row.category,
    status: row.status,
    author: row.author,
    date: formatDate(row.created_at),
    photo: row.photo_url,
  };
}

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("의견 목록을 불러오지 못했습니다.", error);
      return;
    }
    setPosts(data.map(mapRow));
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  async function uploadPhoto(file) {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from("photos").upload(path, file);
    if (error) {
      console.error("사진을 업로드하지 못했습니다.", error);
      throw error;
    }
    return supabase.storage.from("photos").getPublicUrl(path).data.publicUrl;
  }

  async function addPost({ title, content, field, photoFile }) {
    const photoUrl = photoFile ? await uploadPhoto(photoFile) : null;

    const { data, error } = await supabase
      .from("posts")
      .insert({
        title,
        content,
        category: field,
        author: DEMO_AUTHOR_NAME,
        photo_url: photoUrl,
      })
      .select()
      .single();

    if (error) {
      console.error("의견을 저장하지 못했습니다.", error);
      throw error;
    }

    const newPost = mapRow(data);
    setPosts((prev) => [newPost, ...prev]);
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
