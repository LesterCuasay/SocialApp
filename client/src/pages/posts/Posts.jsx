import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentId } from "../../actions/Posts";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  console.log(posts)
  const handleSetCurrentId = (id) => {
    dispatch(setCurrentId(id));
  }

  return (
    <div className="sm:max-w-lg mx-auto space-y-4 my-8">
      {posts.length === 0 ? (
        <div className="rounded bg-white flex justify-center">
          <p className="font-bold p-4">No Posts!</p>
        </div>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <Post post={post} setCurrentId={handleSetCurrentId} />
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
