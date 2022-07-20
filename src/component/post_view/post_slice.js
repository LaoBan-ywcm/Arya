import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: '',
  error: ''
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await axios.get('http://127.0.0.1:8888/api/v1/post');
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        // eslint-disable-line no-unused-vars
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'successed';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'faild';
        state.error = action.error.message;
      });
  }
});

export const selectAllPost = (state) => state.posts;

export default postsSlice.reducer;
