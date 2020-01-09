import React from 'react';
import ScrumMasterPanelComponent from '../components/ScrumMasterPanelComponent';

import { shallow } from 'enzyme';

describe('Test Scrum Master Panel Component', () => {
    const storyList = [
        {
            storyName: 'story1',
            storyPoint: 0,
            isStoryActive: 'Voted'
        },
        {
            storyName: 'story2',
            storyPoint: 0,
            isStoryActive: false
        }
    ];
    const activeStory = 1;

    const votes = [{ activeStory: 1, user: 1, score: 8 }];

    const numOfVoters = 3;

    const user = 2;

    const finishStory = () => {};

    const wrapper = shallow(
        <ScrumMasterPanelComponent
            numOfVoters={numOfVoters}
            activeStory={activeStory}
            storyList={storyList}
            votes={votes}
            user={user}
            onFinishStoryScore={finishStory}
        />
    );

    it('should display title', () => {
        expect(wrapper.find('.title').text()).toEqual('Scrum Master Panel');
    });

    it('should display 3 user and 1 master', () => {
        expect(wrapper.find('.user-list-item').length).toEqual(4);
    });

    it('should display "Scrum Master: Not Voted"', () => {
        expect(
            wrapper
                .find('.user-list-item')
                .at(3)
                .text()
        ).toEqual('Scrum Master: Not Voted');
    });

    it('should display first user score', () => {
        expect(
            wrapper
                .find('.user-list-item')
                .at(0)
                .text()
        ).toEqual('Voter 1: 8');
    });

    it('should display active story', () => {
        expect(wrapper.find('.display-active-story').text()).toEqual(
            `${storyList[activeStory].storyName} is Active`
        );
    });
});
