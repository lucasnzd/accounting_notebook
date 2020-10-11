import { ApiProvider } from "../../providers";
import { updateUserBalance } from "../actions";

export const getBalance = async (dispatch, payload) => {
  try {
    const { data, error } = await ApiProvider.getBalance(payload);
    if (error) {
      throw Error(data?.errors || data?.message || "getBalance dispatcher error");
    }

    dispatch(updateUserBalance(data));
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
