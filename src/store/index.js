import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainReducer";
import thunk from "redux-thunk";

export const actions = {
  GET_RESPONSE: "GET_RESPONSE",
};

const rootReducer = combineReducers({
  mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
