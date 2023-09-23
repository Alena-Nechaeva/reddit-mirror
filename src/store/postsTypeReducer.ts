import { createSlice } from '@reduxjs/toolkit';

export const postsTypeSlice = createSlice({
    name: 'postsType',
    initialState: {
        type: 'best',
    },
    reducers: {
        updatePostsType: (state, data) => {
            state.type = data.payload;
        }
    }
})

export const {updatePostsType} = postsTypeSlice.actions;
export const selectPostsType = (state: any) => state.postsType.type;

export default postsTypeSlice.reducer;