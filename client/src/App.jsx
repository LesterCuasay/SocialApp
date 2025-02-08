import { useEffect } from "react";
import Layout from "./components/Layout";
import PostFeed from "./pages/feed/PostFeed";
import Profile from "./pages/profile/ProfilePage";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex h-screen">
      <Layout />
      <div className="flex-1 bg-gray-800">
        <Routes>
          <Route path="/" element={<PostFeed />} />
          <Route path="/feed" element={<PostFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
