import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let data = res.data.map((post) => {
        return { ...post, comment: { status: 'idle', comments: [] } }
    })
    return data;
})

export const getCommentsId = createAsyncThunk('posts/getCommentsId', async ({ id, index }) => {

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return { data: res.data, id, index };
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },

    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        builder.addCase(getCommentsId.pending, (state, action) => {
            state.posts[action.meta.arg.index].comment.status = 'loading';
        })
        builder.addCase(getCommentsId.fulfilled, (state, action) => {
            state.posts[action.payload.index].comment.comments = [...action.payload.data];
            state.posts[action.payload.index].comment.status = 'succeeded';
        })
        builder.addCase(getCommentsId.rejected, (state, action) => {
            state.posts[action.meta.arg.index].comment.status = 'error';
            state.posts[action.meta.arg.index].comment.comments = action.error.message;
        })
    }
})
export default postsSlice.reducer
