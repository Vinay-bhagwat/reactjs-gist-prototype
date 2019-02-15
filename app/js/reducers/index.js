import { combineReducers } from 'redux';
import gistInfo from './reducer-gist';
import gistComments from './reducer-gist-comments'
import gistApiCount from './reducer-gist-api-count'
const allReducers = combineReducers({
    gistInfo: gistInfo,
    gistComments:gistComments,
    gistApiCount:gistApiCount
});

export default allReducers;