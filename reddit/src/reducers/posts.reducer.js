import * as Actions from '../actions/actionTypes';

const initialState = { 
  posts: [],
  loading: false,
  refreshing: false,
  category: 'new',
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        category: action.category,
        posts: action.data.data.children,
        loading: false,
        refreshing: false
      };
    case Actions.GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
