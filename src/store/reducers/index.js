import { combineReducers } from 'redux';
import sprintReducer from './sprintReducer';
import storyReducer from './storyReducer';
import activeStoryReducer from './activeStoryReducer';
import voteReducer from './voteReducer';

//combine all reducers in rootReducer
const rootReducer = combineReducers({
    sprintReducer,
    storyReducer,
    activeStoryReducer,
    voteReducer
});

// export default withReduxStateSync(rootReducer);

export default rootReducer;
