import { UPDATE_USER_BALANCE } from "../actionTypes";

const INIT_STATE = {
  balance: 0,
};

export const usersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};
