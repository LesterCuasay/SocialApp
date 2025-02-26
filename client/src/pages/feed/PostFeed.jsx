import React, { useContext, useState } from "react";
import Posts from "../posts/Posts";
import PostCreateForm from "../posts/PostCreateForm";
import { AuthContext } from "../../contexts/AuthContext";

const PostFeed = () => {
  const { user } = useContext(AuthContext);
  const [currentId, setCurrentId] = useState(null);

  const isLoggedin = user !== null;

  return (
    <div>
      {isLoggedin ? (
        <>
          <PostCreateForm currentId={currentId} setCurrentId={setCurrentId} />

          <Posts setCurrentId={setCurrentId} />
        </>
      ) : (
        <div className="flex justify-center">
          <div className="bg-white rounded p-8 flex flex-col">
            <div className="mb-4">
              <h2>
                Have you got an account? if so <a href="/login">Login</a>
              </h2>
            </div>
            <div>
              <h3>
                If not <a href="/signup">Sign up here!</a>
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFeed;
