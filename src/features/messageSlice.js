import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    id: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.id = action.payload;
    },
    removeMessage: (state) => {
      state.id = null;
    },
  },
});

export const { login, logout } = messageSlice.actions;

export const selectUser = (state) => state.message.id;

export default messageSlice.reducer;
