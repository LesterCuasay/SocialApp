import React, { useEffect, useRef, useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { TiThumbsUp } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/Posts";
import moment from "moment";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="flex w-full items-center">
          <div className="flex-grow mb-4">
            <h2 className="text-lg font-bold">{post.title}</h2>
          </div>
          <div className="ml-auto">
            <PiDotsThreeBold
              size={24}
              className="cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute translate-x-70 left-1/2 mt-2 w-20 text-center bg-white border rounded-md shadow-lg">
            <div className="bg-green-600 hover:bg-green-500 text-white transition-all duration-300 ease-linear">
              <p
                className="py-2 cursor-pointer"
                onClick={() => {
                  setCurrentId(post._id);
                  handleItemClick();
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
        <p> - {post.creator || "Anonymous"}</p>
        <p>{post.tags}</p>
        <p className="font-sm opacity-50 ml-auto">{moment(post.createdAt).fromNow()}</p>
{  console.log(post.createdAt)}
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
