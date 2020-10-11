import {
  UPDATE_TRANSACTION_DETAILS,
  UPDATE_TRANSACTION_HISTORY
} from "../actionTypes";

const INIT_STATE = {
  transactionDetails: null,
  history: [],
};

export const transactionsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTION_DETAILS:
      return {
        ...state,
        transactionDetails: action.payload,
      };
    case UPDATE_TRANSACTION_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};
