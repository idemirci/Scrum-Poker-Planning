export const createSprint = sprintObj => {
    return {
        type: 'CREATE_SPRINT',
        sprintPlan: sprintObj
    };
};

export const finishStoryVoting = story => {
    return {
        type: 'FINISH_VOTING',
        story: story
    };
};
