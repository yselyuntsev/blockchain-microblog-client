import { authHeader } from "../helpers/auth.helper";
import { handleResponse } from "../helpers/response.helper";
import { networkService } from "./network.service";

export const postsService = {
  createPost,
  getPosts
};

function createPost(username, data, image, link, tags) {
  const requestUrl = `${networkService.getServer()}/posts/broadcast`;

  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify({ username, data, image, link, tags })
  };

  return fetch(requestUrl, requestOptions).then(handleResponse);
}

function getPosts(type, params, start = 0) {
  const requestUrl = `${networkService.getServer()}/posts/${type}/${params}/${start}`;

  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(requestUrl, requestOptions).then(handleResponse);
}
