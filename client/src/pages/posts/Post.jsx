import React from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { TiThumbsUp } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Post = ({ post, setCurrentId }) => {
  return (
    <div>
      <div className="flex border-b-2 p-2 pb-0">
        <h2 className="text-lg font-bold flex-grow mb-4">{post.title}</h2>
        <button className="mb-4 mr-4">
          <PiDotsThreeBold
            size={24}
            className="cursor-pointer"
            onClick={() => {setCurrentId(post._id)}}
          />
        </button>
      </div>
      <div className="p-2">
        <p className="">{post.message}</p>
        <p className=""> - {post.creator || "Anonymous"}</p>
        <p>{post.tags}</p>
      </div>
      <div className="mt-4 flex items-center justify-between p-2">
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
  );
};

export default Post;
