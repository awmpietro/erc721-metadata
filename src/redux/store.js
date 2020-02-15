import { createStore, applyMiddleware } from "redux";
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import rootReducer from "./reducers";

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer)

export default store;