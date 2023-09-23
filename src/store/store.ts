import { configureStore } from '@reduxjs/toolkit';
import commentReducer from '../store/commentSlice'
import tokenReducer from '../store/tokenSlice'
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import postsTypeReducer from './postsTypeReducer';

export default configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentReducer,
    userData: userReducer,
    postsData: postsReducer,
    postsType: postsTypeReducer,
  }
})
