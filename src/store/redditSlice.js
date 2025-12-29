import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularPosts } from "../api/reddit";

const initialState = {
  posts: [],
  error: false,
  isLoading: false,
}

export const fetchPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async () => {
    try {
      return getPopularPosts();
    } catch (error) {
      return error.response.data;
    }
  },
)

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.error = false;
        state.isLoading= true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.error = false;
        state.isLoading= false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.error = true;
        state.isLoading= false;
      })
  },
  selectors: {
    selectPosts: (state) => {
      return state.posts;
    }
  }
})

export const { selectPosts } = redditSlice.selectors;
export default redditSlice.reducer;