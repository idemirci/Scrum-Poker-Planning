import * as actions from '../store/actions';

describe('Test some actions ', () => {
    it('finishActiveStoryScore action test', () => {
        const lastVote = 13;
        const expectedAction = {
            type: 'SET_LAST_SCORE',
            lastVote
        };
        expect(actions.finishActiveStoryScore(lastVote)).toEqual(
            expectedAction
        );
    });

    it('createSprint action test', () => {
        const plan = {
            sessionName: 'session1',
            numOfVoters: 3,
            storyNameList: ['story1']
        };
        const expectedAction = {
            type: 'CREATE_SPRINT',
            sprintPlan: plan
        };

        expect(actions.createSprint(plan)).toEqual(expectedAction);
    });
});
