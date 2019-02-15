import { BASE_API_URL } from "../constants/config";
import { POST_REQUEST_CALL, GET_REQUEST_CALL } from "../util/network_call";

export const gistService = {
  getGistDetails,
  getGistComments,
  getGistApiCount
};

function getGistApiCount() {
  return GET_REQUEST_CALL(`${BASE_API_URL}/count`).then(response => {
    console.log("reso", response);
    return response;
  });
}

function getGistDetails(gistId) {
  if (gistId) {
    const data = JSON.stringify("");

    return POST_REQUEST_CALL(data, `${BASE_API_URL}${gistId}`).then(
      response => {
        return response;
      }
    );
  }
}

function getGistComments(gistId) {
  if (gistId) {
    const data = JSON.stringify("");

    return POST_REQUEST_CALL(data, `${BASE_API_URL}${gistId}/comments`).then(
      response => {
        return response;
      }
    );
  }
}
