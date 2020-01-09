import React from 'react';
import StoryListComponent from '../components/StoryListComponent';
import { shallow } from 'enzyme';

describe('Test StoryList Component', () => {
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
    const mockActiveStory = 1;

    const wrapper = shallow(
        <StoryListComponent
            storyList={mockStoryList}
            activeStory={mockActiveStory}
        />
    );

    it('should display table title ', () => {
        expect(wrapper.find('th').length).toBe(3);
    });

    it('should display firs storyName', () => {
        expect(
            wrapper
                .find('td')
                .at(0)
                .text()
        ).toEqual('story1');
    });
});
