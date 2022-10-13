import { backend } from '@common/constant';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@stores/index';
import axios from 'axios';

interface PostField {
  id: string;
  file: string;
  title: string;
  ctime: string;
  cover: string;
  tags: Array<string>;
  categories: string;
  content: string;
}

interface PostState {
  post: PostField | undefined;
  status: string;
  error: any;
}

const initialState: PostState = {
  post: {
    id: '',
    file: '',
    title: '',
    ctime: '',
    cover: '',
    tags: [],
    categories: '',
    content: ''
  },
  status: 'idle',
  error: null
};

export const fetchPost = createAsyncThunk('post/fetchPost', async (postID: string) => {
  const response = await axios.get(`${backend.url}${backend.postsViewAPI}/${postID}`);
  return response.data;
});

const Post = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.post = action.payload as PostField;
        state.status = 'idle';
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.error;
        state.post = undefined;
        state.status = 'faild';
      });
  }
});

export const getPost = (state: RootState) => state.post.post;
export const getPostState = (state: RootState) => state.post.status;

export default Post.reducer;
