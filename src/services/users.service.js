import { authHeader } from "../helpers/auth.helper";
import { handleResponse } from "../helpers/response.helper";
import { networkService } from "./network.service";

export const usersService = {
  getUser,
  getSubscriptions,
  setSubscription
};

function getUser(username) {
  const requestUrl = `${networkService.getServer()}/users/${username}`;
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  console.log(username);

  return fetch(requestUrl, requestOptions).then(handleResponse);
}

function getSubscriptions(username) {
  const requestUrl = `${networkService.getServer()}/users/subscriptions/${username}`;
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}

function setSubscription(type, username, subscription) {
  const requestUrl = `${networkService.getServer()}/users/${type}/broadcast`;
  const requestOptions = {
    method: "POST",
    headers: {
      ...authHeader(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, subscription })
  };

  return fetch(requestUrl, requestOptions).then(handleResponse);
}
