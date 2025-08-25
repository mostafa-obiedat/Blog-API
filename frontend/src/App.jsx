import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostUpdate from "./pages/PostUpdate";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/post-edit/:id" element={<PostUpdate />} />
      </Routes>
    </Router>
  );
}

export default App;
