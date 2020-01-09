import createSprintReducer from '../store/reducers/sprintReducer';

describe('Test some reducers ', () => {
    it('createSprint reducer test => should render initialState', () => {
        const initialState = {
            sessionName: '',
            numOfVoters: '',
            storyNameList: []
        };

        expect(createSprintReducer(undefined, {})).toEqual(initialState);
    });

    it('createSprint reducer test => should update the state ', () => {
        const state = {
            sessionName: 'sprin1',
            numOfVoters: 3,
            storyNameList: ['story1']
        };

        expect(
            createSprintReducer(undefined, {
                type: 'CREATE_SPRINT',
                sprintPlan: state
            })
        ).toEqual(state);
    });
});
