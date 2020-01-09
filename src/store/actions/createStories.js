export const createStoryList = storyList => {
    return {
        type: 'SET_STORY_LIST',
        stories: storyList
    };
};

export const setActiveStoryIndex = index => {
    return {
        type: 'SET_ACTIVE_STORY_INDEX',
        index
    };
};

export const voteStory = vote => {
    return {
        type: 'VOTE_STORY',
        vote
    };
};

export const finishActiveStoryScore = lastVote => {
    return {
        type: 'SET_LAST_SCORE',
        lastVote
    };
};
