import React from "react";
import { useSelector } from "react-redux";
import Post from "./PostCreateForm";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="w-full max-w-lg mx-auto mt-4">
      {posts.length === 0 ? (
        <p>No Posts!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="rounded p-2 bg-white shadow-lg">
            <h2 className="text-lg font-bold flex justify-center">{post.title}</h2>
            <p>{post.message}</p>
            <p className="mt-4"> - {post.creator || "Anonymous"}</p>
            <p>{post.tags}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
