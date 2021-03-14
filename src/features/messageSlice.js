import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.value = action.payload;
    },
    removeMessage: (state) => {
      state.value = null;
    },
  },
});

export const { addMessage, removeMessage } = messageSlice.actions;

export const selectMessage = (state) => state.message.value;

export default messageSlice.reducer;
