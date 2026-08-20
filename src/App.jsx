import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import PostDetailPage from "./pages/PostDetailPage";
import { PostsProvider } from "./context/PostsContext";

export default function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/posts/:id" element={<PostDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  );
}
