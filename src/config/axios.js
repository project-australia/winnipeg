import Axios from "axios";

export const initializeAxios = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  Axios.defaults.headers.post["Content-Type"] = "application/json";
  Axios.defaults.headers.post["Accept"] = "application/json";

  if (process.env.NODE_ENV !== "production") {
    attachDebugInterceptors();
  }
};

function attachDebugInterceptors() {
  Axios.interceptors.request.use(request => {
    console.groupCollapsed(request.url);
    console.debug(`${request.method} request to ${request.url}, with `);
    console.debug(request.data);
    return request;
  });

  Axios.interceptors.response.use(response => {
    console.debug(`Response from ${response.config.url}`);
    console.debug({ status: response.status, ...response.data });
    console.groupEnd();
    return response;
  });
}
