import { UPDATE_USER_BALANCE } from "../actionTypes";

export const updateUserBalance = ({ balance }) => ({
  type: UPDATE_USER_BALANCE,
  payload: balance,
});
