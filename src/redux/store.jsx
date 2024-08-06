import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./sliceSidebar.jsx";
import liveChatSlice from "./liveChatSlice.jsx";

const store = configureStore({
  reducer: {
    hamburger: toggleReducer,
    chat: liveChatSlice,
  },
});

export default store;
