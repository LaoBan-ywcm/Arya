import { configureStore } from '@reduxjs/toolkit';

import postReducer from '../component/post_view/post_slice';

export default configureStore({
  reducer: {
    posts: postReducer
  }
});
