import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";
import createSagaMiddleware from "@redux-saga/core";

export const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        posts: postsSlice,
    },
})
