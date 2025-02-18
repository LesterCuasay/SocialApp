import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="sm:max-w-lg mx-auto space-y-4 my-8">
      {posts.length === 0 ? (
        <div className="rounded-2xl bg-white flex justify-center">
          <p className="font-bold p-4">No Posts!</p>
        </div>
      ) : (
        posts.map((post, index) => (
          <div
            key={post.id ?? index}
          >
            <Post post={post} setCurrentId={setCurrentId} />
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
