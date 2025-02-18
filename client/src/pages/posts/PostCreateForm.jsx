import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/Posts";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";

const PostCreateForm = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded p-8 mb-4 flex flex-col max-xs:p-2 max-xs:w-75"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  "
            placeholder="Your Name"
            name="creator"
            label="Creator"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            name="title"
            label="Title"
            placeholder="Post Title"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
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
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
        </div>
        <div className="mb-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            name="tags"
            label="Tags"
            placeholder="Add tags (e.g., #React, #WebDev)"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />
        </div>
        <div className="input-file mb-2">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="mb-2 flex justify-center max-xs:block">
          <button
            className="button-submit"
            type="submit"
          >
            Post
          </button>
          <button
            className="button-clear"
            onClick={clear}
            type="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
