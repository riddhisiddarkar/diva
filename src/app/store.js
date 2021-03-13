import { configureStore } from "@reduxjs/toolkit";

import appReducer from "../features/appSlice";
import channelReducer from "../features/channelSlice";
import messageReducer from "../features/messageSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    channel: channelReducer,
    message: messageReducer,
  },
});
