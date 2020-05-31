import { handleResponse } from "../helpers/response.helper";
import { networkService } from "./network.service";

export const authService = {
  login,
  register,
  logout
};

function login(username, password) {
  const requestUrl = `${networkService.getServer()}/auth`;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };
  return fetch(requestUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    });
}
function register(username, password, name, description) {
  const requestUrl = `${networkService.getServer()}/register/broadcast`;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, name, description })
  };
  return fetch(requestUrl, requestOptions)
    .then(handleResponse)
    .then(user => {
      if (user.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}
