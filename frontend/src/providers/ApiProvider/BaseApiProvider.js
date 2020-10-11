export class BaseApiProvider {
  constructor({ apiUrl }) {
    this.baseUrl = apiUrl;
  }

  responseParser = async (response) => {
    if (response.status === 401) {
      return { error: { data: { status: 401 } } };
    }

    const content = await response.text();
    return content.length ? JSON.parse(content) : {};
  };

  errorHandler = (error) => {
    console.log("Error:", error);
    const status = (error?.data && error?.data?.status) || null;
    return { error: true, status };
  };

  generateFetchConfig = (method, body) => ({
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(body && { body: JSON.stringify(body) }),
  });

  handleRequest = async (route, config) => {
    const response = await fetch(`${this.baseUrl}${route}`, config);
    const data = await this.responseParser(response);
    return { data, response };
  };

  handlePayload = ({ data, response }) => ({
    data,
    status: response.status,
    error: response.status >= 400,
  });

  makeRequest = async ({ method, route, body }) => {
    try {
      const config = this.generateFetchConfig(method, body);
      const payload = await this.handleRequest(route, config);

      return this.handlePayload(payload);
    } catch (error) {
      return this.errorHandler(error);
    }
  };

  get = async (route) => this.makeRequest({ method: "get", route });

  post = async (route, body = null) => this.makeRequest({ method: "post", route, body });

  put = async (route, body = null) => this.makeRequest({ method: "put", route, body });

  delete = async (route) => this.makeRequest({ method: "delete", route });
}
