import { authHeader } from "../helpers/auth.helper";
import { handleResponse } from "../helpers/response.helper";
import { networkService } from "./network.service";

export const tagsService = {
  getTags
};

function getTags() {
  const requestUrl = `${networkService.getServer()}/posts/tags`;
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(requestUrl, requestOptions).then(handleResponse);
}
