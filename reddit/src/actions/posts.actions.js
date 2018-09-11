import { GET_CATEGORY, GET_POSTS } from './actionTypes';

export const getCategory = category => ({
  type: GET_CATEGORY,
  category
});

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});
