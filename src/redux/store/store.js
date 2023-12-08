import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../reducers/resumeSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});
