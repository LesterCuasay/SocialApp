import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  SET_CURRENT_ID,
  SET_POST_DATA,
} from "../constants/actionTypes";

const initialState = {
  currentId: null,
  postData: {
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  },
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case SET_CURRENT_ID:
      return { ...state, currentId: action.payload };
    case SET_POST_DATA:
      return { ...state, postData: action.payload };
    default:
      return state;
  }
};
