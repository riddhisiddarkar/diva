import { createSlice } from "@reduxjs/toolkit";

export const channelSlice = createSlice({
  name: "channel",
  initialState: {
    value: null,
  },
  reducers: {
    addChannel: (state, action) => {
      state.value = action.payload;
    },
    removeChannel: (state) => {
      state.value = "";
    },
  },
});

export const { addChannel, removeChannel } = channelSlice.actions;

export const selectChannel = (state) => state.channel.value;

export default channelSlice.reducer;
