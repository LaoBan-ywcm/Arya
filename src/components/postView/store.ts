import { backend } from '@common/constant';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface PostsViewState {
  status: string;
  posts: Array<any>;
  error: any;
}

const initialState: PostsViewState = {
  status: 'idle',
  posts: [],
  error: null
};

export const fetchPostsView = createAsyncThunk('postsViews/fetchPostsViews', async (page: number) => {
  const resp = await axios.get(`${backend.url}${backend.postsViewAPI}?page=${page}`);
  return resp.data;
});

const postsViewSlice = createSlice({
  name: 'post_view',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostsView.pending, (state, action) => {
        state.status = 'loading';
        state.posts = [];
      })
      .addCase(fetchPostsView.fulfilled, (state, action) => {
        state.status = 'successed';
        state.posts = action.payload.data ? state.posts.concat(action.payload.data) : [];
        state.status = 'idle';
      })
      .addCase(fetchPostsView.rejected, (state, action) => {
        state.status = 'faild';
        state.error = action.error.message;
      });
  }
});

export default postsViewSlice.reducer;
