import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"

import buffersReducer from "./buffers"

const reducer = combineReducers({
  buffersReducer,
})

const store = configureStore({ reducer })

export default store
