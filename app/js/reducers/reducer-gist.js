import { gistConstants } from "../constants/gistConstants";

let user = localStorage.getItem("user");
const initialState = {
  owner: { login: "", avatar_url: "" },
  files: { filename: "", content: "" },
  created_at: ""
};

const gistInfo = (state = initialState, action) => {
  const { type, gistDetails } = action;
  switch (type) {
    case gistConstants.GET_GIST_DETAILS:
      return gistDetails;
      break;
    case "TEST_ACTION":
      return {};
    default:
      return state;
  }
};

export default gistInfo;
