import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
  name: 'userData',
  initialState: {
    isLoading: false,
    error: '',
    data: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = {
        name: action.payload.name,
        userImg: action.payload.icon_img,
      };
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error.message);
      state.error = action.error.message || '';
    });
  },
});

export const fetchUserData = createAsyncThunk('userData/fetchUserData', async (_, thunkAPI) => {
  const currentState: any = thunkAPI.getState();
  const res = await axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: { Authorization: `bearer ${currentState.token.token}` },
  });
  const data = await res.data;
  return data;
});

export const selectUserData = (state: any) => state.userData.data;
export const selectUserLoading = (state: any) => state.userData.isLoading;
export default userSlice.reducer;
