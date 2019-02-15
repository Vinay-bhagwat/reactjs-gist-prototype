import { gistConstants } from "../constants/gistConstants";

const initialState = [{
  body:'',
  created_at:'',
  user:{
    login:'',
    avatar_url:''
  }
}];

const gistComments = (state = initialState, action) => {
  const { type, gistComments } = action;
  switch (type) {
    case gistConstants.GET_GIST_COMMENTS:
      return gistComments;
      break;
    case "TEST_ACTION":
      return {};
    default:
      return state;
  }
};

export default gistComments;


// author_association: "NONE"
// body: "Awesome, but I can't quite get why there is an empty `init()` in `Withable` protocol?
// ↵Ah, nvm, it's used `self.init()` here"
// created_at: "2019-01-29T07:20:55Z"
// id: 2822854
// node_id: "MDExOkdpc3RDb21tZW50OWI0YWFjODdlN2Y4OGM4MGU5MzJiYTNjODQzMjUyZGY6MjgyMjg1NA=="
// updated_at: "2019-01-29T07:22:14Z"
// url: "https://api.github.com/gists/9b4aac87e7f88c80e932ba3c843252df/comments/2822854"
// user: {login: "elfenlaid", id: 765790, node_id: "MDQ6VXNlcjc2NTc5MA==", avatar_url: "https://avatars2.githubusercontent.com/u/765790?v=4", gravatar_id: "", …}
