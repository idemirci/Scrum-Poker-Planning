const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_STORY_INDEX':
            return action.index;
        default:
            return state;
    }
};

export default reducer;
