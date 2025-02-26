import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import {
  createPost,
  setPostData,
  updatePost,
  setCurrentId,
} from "../../actions/Posts";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";
import { AuthContext } from "../../contexts/AuthContext";

const PostCreateForm = () => {
  const { user } = useContext(AuthContext);

  const { currentId, postData, posts } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentId) {
      const selectedPost = posts.find((post) => post._id === currentId);
      if (selectedPost) {
        dispatch(setPostData({ ...selectedPost, creator: user.username }));
      }
    }
  }, [currentId, dispatch, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, creator: user.username }));
    } else {
      dispatch(createPost({ ...postData, creator: user.username }));
    }
    clear();
  };

  const clear = () => {
    dispatch(setCurrentId(null));
    dispatch(
      setPostData({
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      })
    );
  };

  const handleInputChange = (e) => {
    dispatch(setPostData({ ...postData, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded p-8 mb-4 mt-20 flex flex-col max-xs:w-75"
        action=""
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h2 className="text-center text-2xl">
            {currentId ? "Update" : "Create"} a Post!
          </h2>
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="title"
            label="Title"
            placeholder="Post Title"
            value={postData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none "
            name="message"
            label="Message"
            placeholder="Write your message here"
            rows={4}
            value={postData.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="tags"
            label="Tags"
            placeholder="Add tags (e.g., #React, #WebDev)"
            value={postData.tags}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-file mb-2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              dispatch(setPostData({ ...postData, selectedFile: base64 }))
            }
          />
        </div>
        <div className="mb-2 flex justify-center max-xs:block">
          <button className="button-submit" type="submit">
            Post
          </button>
          <button className="button-clear" onClick={clear} type="button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
