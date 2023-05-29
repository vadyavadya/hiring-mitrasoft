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

export const getCommentsId = createAsyncThunk('posts/getCommentsId', async ({ id }) => {

    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return { data: res.data, id };
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
            let index = state.posts.findIndex((post) => post.id === action.meta.arg.id);
            state.posts[index].comment.status = 'loading';
        })
        builder.addCase(getCommentsId.fulfilled, (state, action) => {
            let index = state.posts.findIndex((post) => post.id === action.meta.arg.id);
            state.posts[index].comment.comments = [...action.payload.data];
            state.posts[index].comment.status = 'succeeded';
        })
        builder.addCase(getCommentsId.rejected, (state, action) => {
            let index = state.posts.findIndex((post) => post.id === action.meta.arg.id)
            state.posts[index].comment.status = 'error';
            state.posts[index].comment.comments = action.error.message;
        })
    }
})
export default postsSlice.reducer
