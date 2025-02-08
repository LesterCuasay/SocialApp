import React from "react";
import { useSelector } from "react-redux";
import { PiDotsThreeBold } from "react-icons/pi";
import { TiThumbsUp } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="w-full max-w-full sm:max-w-lg mx-auto mt-4 space-y-4 z-1000">
      {posts.length === 0 ? (
        <p>No Posts!</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={post.id ?? index}
            className="rounded-xl p-2 bg-white shadow-lg"
          >
            <div className="flex border-b-2">
              <h2 className="text-lg font-bold flex-grow mb-4">{post.title}</h2>
              <button className="mb-4 mr-4">
                <PiDotsThreeBold size={24} className="cursor-pointer" />
              </button>
            </div>
            <p className="mx-4">{post.message}</p>
            <p className="mt-4"> - {post.creator || "Anonymous"}</p>
            <p>{post.tags}</p>
            <div className="mt-4 flex items-center justify-between mx-2">
              <div className="flex items-center space-x-2">
                <TiThumbsUp
                  size={24}
                  className="cursor-pointer text-blue-500"
                  onClick={() => {}}
                />
                <span>Likes</span>
                <span>{post.likeCount}</span>
              </div>
              <div>
                <MdDelete
                  size={24}
                  className="cursor-pointer text-red-500"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
