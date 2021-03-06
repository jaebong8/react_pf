import { combineReducers } from "redux";
import * as types from "./actionType";

const memberReducer = (state = { members: [] }, action) => {
  switch (action.type) {
    case types.MEMBER.start:
      return { ...state };
    case types.MEMBER.success:
      return { ...state, members: action.payload };
    case types.MEMBER.error:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
const youtubeReducer = (state = { youtube: [] }, action) => {
  switch (action.type) {
    case types.YOUTUBE.start:
      return { ...state };
    case types.YOUTUBE.success:
      return { ...state, youtube: action.payload };
    case types.YOUTUBE.error:
      return { ...state, youtube: action.payload };
    default:
      return state;
  }
};

const flickrReducer = (state = { flickr: [] }, action) => {
  switch (action.type) {
    case types.FLICKR.start:
      return { ...state };
    case types.FLICKR.success:
      return { ...state, flickr: action.payload };
    case types.FLICKR.error:
      return { ...state, flickr: action.payload };
    default:
      return state;
  }
};
const galleryReducer = (state = { gallery: [] }, action) => {
  switch (action.type) {
    case types.GALLERY.start:
      return { ...state };
    case types.GALLERY.success:
      return { ...state, gallery: action.payload };
    case types.GALLERY.error:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};

const reducers = combineReducers({
  memberReducer,
  youtubeReducer,
  flickrReducer,
  galleryReducer,
});

export default reducers;
