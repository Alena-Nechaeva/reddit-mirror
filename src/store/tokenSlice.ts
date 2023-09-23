import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '',
    isLoading: false,
  },
  reducers: {
    setToken: (state, data) => {
      let token = data.payload;
      state.token = token;
    },
  },
});

export const saveToken =
  () => async (dispatch: (arg0: { payload: string; type: 'token/setToken' }) => void) => {
    const token = window.__token__ ? window.__token__ : localStorage.getItem('token');
    if (token) localStorage.setItem('token', token);
    dispatch(setToken(token));
  };

export const { setToken } = tokenSlice.actions;
export const selectToken = (state: any) => state.token.token;
export default tokenSlice.reducer;
