import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate";
import PostDelete from "./pages/PostDelete";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/post-edit/:id" element={<PostUpdate />} />
        <Route path="/post-delete/:id" element={<PostDelete />} />
      </Routes>
    </Router>
  );
}

export default App;
