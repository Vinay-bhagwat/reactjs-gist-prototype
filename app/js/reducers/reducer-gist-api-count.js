import { gistConstants } from "../constants/gistConstants";

const initialState = [
  { gistApiType: "gist_info_api", apiHitCount: 0 },
  { gistApiType: "gist_comment_info_api", apiHitCount: 0 },
  { gistApiType: "gist_create_comment_api", apiHitCount: 0 }
];

const gistApiCount = (state = initialState, action) => {
  const { type, gistApiCount } = action;
  switch (type) {
    case gistConstants.GET_GIST_API_COUNT:
      return gistApiCount;
      break;
    case "TEST_ACTION":
      return {};
    default:
      return state;
  }
};

export default gistApiCount;
