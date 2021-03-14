import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import channelReducer from "../features/channelSlice";
import messageReducer from "../features/messageSlice";
import articleReducer from "../features/articleSlice";
import contactReducer from "../features/contactSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    channel: channelReducer,
    message: messageReducer,
    article: articleReducer,
    contact: contactReducer,
  },
});
