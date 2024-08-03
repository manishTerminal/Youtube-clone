import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./sliceSidebar.jsx";

const store = configureStore({
  reducer: {
    hamburger: toggleReducer,
  },
});

export default store;
