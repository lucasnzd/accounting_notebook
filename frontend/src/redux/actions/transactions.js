import {
  UPDATE_TRANSACTION_DETAILS,
  UPDATE_TRANSACTION_HISTORY,
} from "../actionTypes";

export const updateTransactionDetails = ({ transaction }) => ({
  type: UPDATE_TRANSACTION_DETAILS,
  payload: transaction,
});

export const updateTransactionHistory = ({ history }) => ({
  type: UPDATE_TRANSACTION_HISTORY,
  payload: history,
});
