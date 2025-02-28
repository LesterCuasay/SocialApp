import React, { useContext, useState } from "react";
import Posts from "../posts/Posts";
import PostCreateForm from "../posts/PostCreateForm";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const PostFeed = () => {
  const { user } = useContext(AuthContext);
  const [currentId, setCurrentId] = useState(null);
  const navigate = useNavigate();

  const isLoggedin = user !== null;

  return (
    <div>
      {isLoggedin ? (
        <>
          <PostCreateForm currentId={currentId} setCurrentId={setCurrentId} />

          <Posts setCurrentId={setCurrentId} />
        </>
      ) : (
        <div className="flex min-h-screen justify-center items-center align-center ">
          <div className="flex flex-row rounded-lg bg-white shadow-lg w-full max-w-screen-lg">
            <div className="flex justify-center items-center px-2 py-4 sm:p-8 w-full sm:max-w-lg lg:max-w-xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <h2 className="text-md font-semibold mb-4 sm:text-3xl">
                  Have an account?
                </h2>
                <p className="mb-6 text-gray-600 max-sm:text-[10px] text-lg">
                  Welcome back!
                </p>
                <button
                  className="button-submit"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>

            <div className="w-[2px] h-auto bg-gray-300"></div>

            <div className="flex justify-center items-center px-2 py-4 sm:p-8 w-full sm:max-w-lg lg:max-w-xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <h2 className="text-md font-semibold mb-4 sm:text-3xl"> New here?</h2>
                <p className="mb-6 text-gray-600 max-sm:text-[10px] text-lg">If not sign up below!</p>
                <button
                  className="button-submit"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostFeed;
