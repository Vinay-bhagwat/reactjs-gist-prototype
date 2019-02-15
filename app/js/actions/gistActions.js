import { gistConstants } from "../constants/gistConstants";
import { gistService } from "../services/gistService";

export const gistActions = {
  gistDetails,
  gistComments,
  gistApiCount
};

function gistApiCount() {
  return dispatch => {
    return gistService.getGistApiCount().then(gistApiCount => {
      console.log("gistDetail", gistApiCount);

      dispatch(success(gistApiCount));
    });
  };
  function success(gistApiCount) {
    return { type: gistConstants.GET_GIST_API_COUNT, gistApiCount };
  }
}

function gistDetails(gistId) {
  return dispatch => {
    return gistService.getGistDetails(gistId).then(gistDetail => {
      console.log("gistDetail", gistDetail);

      if (gistDetail) {
        dispatch(success(gistDetail));
      } else {
        dispatch(success(gistDetail));
      }
    });
  };

  function success(gistDetails) {
    return { type: gistConstants.GET_GIST_DETAILS, gistDetails };
  }
}

function gistComments(gistId) {
  return dispatch => {
    return gistService.getGistComments(gistId).then(gistComments => {
      if (gistComments) {
        dispatch(success(gistComments));
      } else {
        dispatch(success(gistComments));
      }
    });
  };

  function success(gistComments) {
    return { type: gistConstants.GET_GIST_COMMENTS, gistComments };
  }
}
