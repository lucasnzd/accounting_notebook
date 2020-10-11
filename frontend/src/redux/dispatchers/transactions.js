import { ApiProvider } from "../../providers";
import {
  updateTransactionDetails,
  updateTransactionHistory,
  updateUserBalance
} from "../actions";

export const getTransactionById = async (dispatch, payload) => {
  try {
    const { data, error } = await ApiProvider.getTransactionById(payload);
    if (error) {
      throw Error(data?.errors || data?.message || "getTransactionById dispatcher error");
    }

    dispatch(updateTransactionDetails(data));
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const createTransaction = async (dispatch, payload) => {
  try {
    const { data, error } = await ApiProvider.createTransaction(payload);

    const {
      data: balanceData,
      error: balanceError
    } = await ApiProvider.getBalance();

    if (error) {
      throw Error(
        data?.errors ||
        data?.message ||
        "createTransaction dispatcher error"
      );
    }

    if (balanceError) {
      throw Error(
        balanceData?.errors ||
        balanceData?.message ||
        "createTransaction dispatcher error"
      );
    }

    dispatch(updateUserBalance(balanceData));
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getHistory = async (dispatch, payload) => {
  try {
    const { data, error } = await ApiProvider.getHistory(payload);
    if (error) {
      throw Error(data?.errors || data?.message || "getHistory dispatcher error");
    }

    dispatch(updateTransactionHistory(data));
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
