import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const initialState = {
  posts: [],
  isLoading: false,
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}products`);
      console.log(res.data);
      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const putPosts = createAsyncThunk(
  "posts/putPosts",
  async (payload, thunkAPI) => {
    try {
      const res = axios.put(`${BASE_URL}products/${payload.id}`, payload);
      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deletePosts = createAsyncThunk(
  "posts/deletePosts",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.delete(`${BASE_URL}products/${payload}`);
      return res;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const postPosts = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}products/`, payload);
      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getSinglePage = createAsyncThunk(
  "posts/postPosts",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.get(`${BASE_URL}products/${payload}`);
      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default PostsSlice.reducer;
export const { posts } = PostsSlice.actions;
