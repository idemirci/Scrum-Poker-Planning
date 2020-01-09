import React from 'react';
import ActiveStoryComponent from '../components/ActiveStoryComponent';
import { shallow } from 'enzyme';

describe('ActiveStoryComponent tests', () => {
    const mockVoteStory = jest.fn();

    const mockStoryList = [
        {
            storyName: 'story1',
            storyPoint: 8,
            isStoryActive: false
        },
        {
            storyName: 'story2',
            storyPoint: 0,
            isStoryActive: true
        }
    ];

    const user = 2;
    const votes = [{ activeStory: 1, user: 1, score: 8 }];
    const activeStoryIndex = 1;

    const wrapper = shallow(
        <ActiveStoryComponent
            onVoteStory={mockVoteStory}
            user={user}
            votes={votes}
            activeStory={activeStoryIndex}
            storyList={mockStoryList}
        />
    );

    it('should display active story title', () => {
        expect(wrapper.find('.title').text()).toEqual(
            `${mockStoryList[activeStoryIndex].storyName}`
        );
    });

    it('should display all points', () => {
        expect(wrapper.find('.button-box').length).toBe(12);
    });

    it('should call callback function when user click button ', () => {
        wrapper
            .find('button.button-box')
            .at(3)
            .simulate('click', {
                target: { value: '5', style: {} }
            });

        const callbackCount = mockVoteStory.mock.calls.length;
        expect(callbackCount).toBe(1);
    });
});
