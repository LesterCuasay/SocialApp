import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Profile from "./pages/profile/ProfilePage";
import Logout from "./pages/auth/Logout";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen">
      <Layout />
      <div className="flex-1 ml-32 mt-16 bg-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
