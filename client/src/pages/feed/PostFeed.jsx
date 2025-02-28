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
        <div className="flex min-h-screen justify-center items-center align-center">
          <div className="flex flex-row rounded-lg bg-white shadow-lg">
            <div className="flex justify-center items-center p-8 w-full max-w-md sm:max-w-lg lg:max-w-xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Already a member?
                </h2>
                <p className="mb-6 text-gray-600">Have you got an account? if so</p>
                <button
                    className="button-submit"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
              </div>
            </div>

            <div className="w-[2px] h-auto bg-gray-300"></div>

            <div className="flex justify-center items-center p-8 text-center w-full max-w-md sm:max-w-lg lg:max-w-xl min-h-[200px] sm:min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4"> New here?</h2>
                <p className="mb-6 text-gray-600">If not sign up below!</p>
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
