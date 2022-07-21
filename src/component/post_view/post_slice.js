import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: 'idle',
  error: null,
  posts: [],
  total: 0
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (page) => {
  const response = await axios.get(`http://127.0.0.1:8888/api/v1/post?page=${page}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'successed';
        state.posts = state.posts.concat(action.payload.data);
        state.total = action.payload.total;
        state.status = 'idle';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'faild';
        state.error = action.error.message;
      });
  }
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsCount = (state) => state.posts.total;

export default postsSlice.reducer;
