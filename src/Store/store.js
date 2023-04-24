import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "./posts/postsReducer";

export const store = configureStore({
  reducer: {
    posts: PostsSlice,
  },
});
