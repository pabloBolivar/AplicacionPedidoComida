import { createStore } from "redux";
import reduxThunk from "redux-thunk";

import indexReducer from "./indexReducer";
//import from ''; applyMiddleware(reduxThunk)
export const store = createStore(indexReducer, {});
