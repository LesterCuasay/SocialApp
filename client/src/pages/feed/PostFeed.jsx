import React, { useState } from "react";
import Posts from "../posts/Posts";
import PostCreateForm from "../posts/PostCreateForm";

const PostFeed = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div>
      <PostCreateForm currentId={currentId} setCurrentId={setCurrentId} />
      
      <Posts setCurrentId={setCurrentId} />
    </div>
  );
};

export default PostFeed;
