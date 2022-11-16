// import { createStore, combineReducers, applyMiddleware } from  "redux";
// import {reducer} from "./reducer";
// import { sectionReducer } from "./sectionReducer";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


// const rootReducer = combineReducers({
//   reducer,
//   sectionReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import todoSectionReducer from "./sectionReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoSection: todoSectionReducer
  }
})

export  default store;