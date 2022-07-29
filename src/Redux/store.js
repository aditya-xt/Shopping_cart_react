import { createStore, applyMiddleware } from "redux";
import { storeReducer } from "./reducer";
import logger from "redux-logger";

export const store = createStore(storeReducer, applyMiddleware(logger));
