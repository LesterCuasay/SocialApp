import { useEffect } from "react";
import Layout from "./components/Layout";
import PostFeed from "./pages/feed/PostFeed";
import Profile from "./pages/profile/ProfilePage";
import SignUpPage from "./pages/auth/SignUpPage";
import Login from "./pages/auth/Login";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/Posts";

import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex">
      <Layout />
      <div className="flex-1 px-8 md:pl-38 md:pr-8 mt-16 pt-10 bg-gray-800 min-h-screen max-xs:w-full">
        <Routes>
          <Route path="/" element={<PostFeed />} />
          <Route path="/feed" element={<PostFeed />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
