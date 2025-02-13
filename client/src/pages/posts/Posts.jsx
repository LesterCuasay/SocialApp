import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="w-full max-w-full sm:max-w-lg mx-auto mt-4 space-y-4 z-1000">
      {posts.length === 0 ? (
        <div className="rounded bg-white flex justify-center">
          <p className="font-bold p-4">No Posts!</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div
            key={post.id ?? index}
            className="rounded-xl p-2 bg-white shadow-lg"
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
