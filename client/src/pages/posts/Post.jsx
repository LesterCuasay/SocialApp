import React, { useContext } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { TiThumbsUp } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext";
import { deletePost, likePost } from "../../actions/Posts";
import moment from "moment";
import useClickOutsideToggle from "../../hooks/useClickOutsideToggle";
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { isDropdownOpen, setIsDropdownOpen, handleItemClick, dropdownRef } =
    useClickOutsideToggle();

  const handleUpdate = () => {
    navigate("/update");
  };

  return (
    <div className="bg-white rounded-2xl">
      <div>
        {post.selectedFile && (
          <img
            src={post.selectedFile}
            className="w-full h-48 object-cover rounded-2xl"
            alt=""
          />
        )}
      </div>
      <div className="flex border-b-2 p-2" ref={dropdownRef}>
        <div className="flex w-full items-center mx-2">
          <div className="flex-grow mb-4">
            <h2 className="text-lg font-bold">{post.title}</h2>
          </div>
          {user && user.username === post.creator && (
            <div className="ml-auto">
              <PiDotsThreeBold
                size={24}
                className="cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
            </div>
          )}
        </div>
        {isDropdownOpen && (
          <div className="absolute translate-x-70 left-1/2 mt-2 w-20 text-center bg-white border rounded-md shadow-lg max-xs:translate-x-20">
            <div className="bg-green-600 hover:bg-green-500 text-white transition-all duration-300 ease-linear">
              <p
                className="py-2 cursor-pointer"
                onClick={() => {
                  setCurrentId(post._id);
                  handleItemClick();
                  handleUpdate();
                }}
              >
                Update
              </p>
            </div>
            <div className="bg-red-600 hover:bg-red-500 text-white transition-all duration-300 ease-linear">
              <p
                className="py-2 cursor-pointer"
                onClick={() => {
                  dispatch(deletePost(post._id));
                  handleItemClick();
                }}
              >
                Delete
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="p-2 flex flex-col">
        <p className="my-4">{post.message}</p>
        <p className="capitalize"> - {post.creator}</p>
        <p>{post.tags}</p>
        <p className="font-sm opacity-50 ml-auto">
          {moment(post.createdAt).fromNow()}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-center p-2">
        <div className="flex items-center space-x-2">
          <TiThumbsUp
            size={32}
            className="cursor-pointer text-blue-500 active:scale-[0.9]"
            onClick={() => dispatch(likePost(post._id))}
          />
          <span>Likes</span>
          <span>{post.likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
