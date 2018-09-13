import { GET_POSTS, REFRESH_POSTS } from './actionTypes';

export const getPostsByCategory = category => ({
  type: GET_POSTS,
  category,
  api: {
    endpoint: `${category}.json`
  }
});

export const refreshPosts = refreshing => ({
  type: REFRESH_POSTS,
  refreshing
});
