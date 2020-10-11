import { BaseApiProvider } from "./BaseApiProvider";
import { config } from "../../utils";

class ApiProviderRaw extends BaseApiProvider {
  /*
   *
   * Add your Api Requests Here
   * - methods available [get/post/put/delete]
   *
   */

  async getBalance() {
    const path = '/user/balance';
    const response = await this.get(path);
    return response;
  }

  async getTransactionById(id) {
    const path = `/transaction?transactionId=${id}`;
    const response = await this.get(path);
    return response;
  }

  async createTransaction(payload) {
    const path = '/transaction/create';
    const response = await this.post(path, payload);
    return response;
  }

  async getHistory() {
    const path = '/transaction/history';
    const response = await this.get(path);
    return response;
  }
}

export const ApiProvider = new ApiProviderRaw(config);
