import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/Posts";

const Post = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <div className="bg-white flex justify-center">
      <form
        className="flex flex-col"
        action=""
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2>Write A Post!</h2>
        <input
          className="border-2 mb-2"
          placeholder="Your Name"
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          className="border-2 mb-2"
          name="title"
          label="Title"
          placeholder="Post Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          className="border-2 mb-2 resize-none"
          name="message"
          label="Message"
          placeholder="Write your message here"
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          className="border-2 mb-2"
          name="tags"
          label="Tags"
          placeholder="Add tags (e.g., #React, #WebDev)"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <button
          className="bg-blue-500 rounded-2xl mb-2 text-white cursor-pointer" 
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-red-500 rounded-2xl mb-2 text-white cursor-pointer"
          onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Post;
