import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.contact = action.payload;
    },
    remove: (state) => {
      state.contact = null;
    },
  },
});

export const { addContact, remove } = contactSlice.actions;

export const selectContact = (state) => state.contact.contact;

export default contactSlice.reducer;
