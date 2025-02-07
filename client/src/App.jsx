import { useEffect, useState } from "react";
import Layout from "./components/Layout";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex">
      <Layout />
    </div>
  );
}

export default App;
