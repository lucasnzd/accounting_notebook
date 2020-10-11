import { combineReducers } from "redux";
import { transactionsReducer } from "./transactionsReducer";
import { usersReducer } from "./usersReducer";

export const reducer = combineReducers({
  transactionsReducer,
  usersReducer,
});
