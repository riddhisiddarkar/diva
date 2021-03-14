import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    value: null,
  },
  reducers: {
    addarticle: (state, action) => {
      state.value = action.payload;
    },
    removearticle: (state) => {
      state.value = null;
    },
  },
});

export const { addarticle, removearticle } = articleSlice.actions;

export const selectArticle = (state) => state.article.value;

export default articleSlice.reducer;
