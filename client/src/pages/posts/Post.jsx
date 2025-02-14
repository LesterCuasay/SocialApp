import React, { useEffect, useRef, useState } from "react";
import { PiDotsThreeBold } from "react-icons/pi";
import { TiThumbsUp } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../actions/Posts";

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
    <div>
      <div className="flex border-b-2 p-2 pb-0" ref={dropdownRef}>
        <h2 className="text-lg font-bold flex-grow mb-4">{post.title}</h2>
        <button>
          <PiDotsThreeBold
            size={24}
            className="cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
        </button>
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
      <div className="p-2">
        <p className="">{post.message}</p>
        <p className=""> - {post.creator || "Anonymous"}</p>
        <p>{post.tags}</p>
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
