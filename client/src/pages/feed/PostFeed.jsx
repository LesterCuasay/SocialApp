import React from "react";
import Posts from "../posts/Posts";
import Post from "../posts/PostCreateForm";

const PostFeed = () => {
  return (
    <div>
      <Post />

      <Posts />
    </div>
  );
};

export default PostFeed;
