import { GET_CATEGORY, GET_POSTS } from '../actions/actionTypes';

const initialState = { 
  posts: [],
  category: 'new'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: action.category
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
};
