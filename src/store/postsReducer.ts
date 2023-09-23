import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postsSlice = createSlice({
  name: 'postsData',
  initialState: {
    isLoading: false,
    error: '',
    data: [],
    nextAfter: '',
    loadingsCount: 1,
  },
  reducers: {
    setAfter: (state, data) => {
      let dataAfter = data.payload;
      state.nextAfter = dataAfter;
    },
    setLoadingsCount: (state, data) => {
      state.loadingsCount = data.payload + 1;
    },
    setZeroData: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostsData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.concat(...action.payload);
    });
    builder.addCase(fetchPostsData.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
      state.error = action.error.message || '';
    });
  },
});

export const fetchPostsData = createAsyncThunk(
  'content/fetchPostsData',
  async (postsSelector: string, thunkAPI) => {
    const currentState: any = thunkAPI.getState();
    const dispatch = thunkAPI.dispatch;
    const resp = await axios.get(`https://oauth.reddit.com/${postsSelector}?sr_detail=true`, {
      headers: { Authorization: `bearer ${currentState.token.token}` },
      params: { limit: 8, after: currentState.postsData.nextAfter },
    });
    console.log(postsSelector);
    const loadNumber = currentState.postsData.loadingsCount;
    const after = await resp.data.data.after;
    const posts = await resp.data.data.children.map((post: any) => {
      return {
        id: post.data.id,
        authorName: post.data.author,
        title: post.data.title,
        created: post.data.created_utc,
        image: post.data.url,
        previewSrc: post.data.preview
          ? post.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
          : null,
        score: post.data.ups,
        authorAvatarSrc: post.data.sr_detail.icon_img,
      };
    });

    dispatch(setAfter(after));
    dispatch(setLoadingsCount(loadNumber));

    return posts;
  }
);

export const { setAfter, setLoadingsCount, setZeroData } = postsSlice.actions;
export const selectPostsData = (state: any) => state.postsData.data;
export const selectPostsLoading = (state: any) => state.postsData.isLoading;
export const selectPostsError = (state: any) => state.postsData.error;
export const selectLoadingsCount = (state: any) => state.postsData.loadingsCount;
export const selectIsFirstLoad = (state: any) => state.postsData.isFirstLoad;
export default postsSlice.reducer;
