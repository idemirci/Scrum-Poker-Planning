const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_STORY':
            const newState = [];
            newState.push(action.vote);
            return state.concat(newState);

        default:
            return state;
    }
};

export default reducer;
