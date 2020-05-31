import { handleResponse } from "../helpers/response.helper";

export const networkService = {
  changeServer,
  getServer,
  allServers
};

function changeServer(url) {
  localStorage.setItem("apiUrl", url);
  return url;
}

function getServer() {
  return localStorage.getItem("apiUrl") || "http://localhost:3000";
}

function allServers() {
  const requestUrl = `${getServer()}/network`;
  const requestOptions = {
    method: "get"
  };

  return fetch(requestUrl, requestOptions).then(handleResponse);
}
