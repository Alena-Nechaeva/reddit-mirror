import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        text: '',
    },
    reducers: {
        updateComment: (state, data) => {
            let com = data.payload
            state.text = com;
        }
    }
})

export const {updateComment} = commentSlice.actions;
export const selectComment = (state: any) => state.comment.text;

export default commentSlice.reducer;