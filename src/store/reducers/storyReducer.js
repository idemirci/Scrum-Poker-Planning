const initialState = [
    {
        storyName: '',
        storyPoint: 0,
        isStoryActive: false,
        votedCount: 0
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STORY_LIST':
            const mapStoryList = action.stories.map(story => {
                return {
                    storyName: story,
                    storyPoint: 0,
                    isStoryActive: false
                };
            });
            return mapStoryList;
        case 'SET_LAST_SCORE':
            const updatedStoryList = state.map((story, index) => {
                if (index === action.lastVote.activeStory) {
                    return {
                        ...state[index],
                        storyPoint: action.lastVote.score,
                        isStoryActive: 'Voted'
                    };
                }
                return state[index];
            });
            return updatedStoryList;
        default:
            return state;
    }
};

export default reducer;
