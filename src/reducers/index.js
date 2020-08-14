import { combineReducers } from "redux";

const quoteReducer = (state = {}, action) => {
  if (action.type === "FETCH_QUOTE") {
    return action.payload.quote;
  }
  return state;
};

export default combineReducers({ quoteReducer: quoteReducer });
