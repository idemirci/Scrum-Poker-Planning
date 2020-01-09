const initialState = {
    sessionName: '',
    numOfVoters: '',
    storyNameList: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_SPRINT':
            return { ...state, ...action.sprintPlan };

        default:
            return state;
    }
};

export default reducer;
