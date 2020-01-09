import React from 'react';
import AddStoryListComponent from '../components/AddStoryListComponent';
import { mount } from 'enzyme';

describe('AddStoryListComponent tests', () => {
    const mockCreateSprintPlan = jest.fn();
    const props = {
        onCreateSprintPlan: mockCreateSprintPlan
    };
    const wrapper = mount(<AddStoryListComponent {...props} />);

    it('should display form to create plan', () => {
        expect(wrapper.find('form.form-menu').length).toBe(1);
    });

    it('should not call callback function if master doesnt enter the one of the input', () => {
        wrapper.find('input.story-input').simulate('change', {
            target: { value: '' }
        });

        wrapper.find('.startButton').simulate('click', {
            preventDefault: () => {}
        });

        const callbackCount = mockCreateSprintPlan.mock.calls.length;
        expect(callbackCount).toBe(0);
    });

    it('should call callback function when you submit form', () => {
        wrapper.find('input.story-input').simulate('change', {
            target: { value: 'Sprint' }
        });
        wrapper.find('input.voters-input').simulate('change', {
            target: { value: 3 }
        });

        wrapper.find('textarea.storyListArea').simulate('change', {
            target: { value: 'Story 1' }
        });

        wrapper.find('.startButton').simulate('click', {
            preventDefault: () => {}
        });

        const callbackCount = mockCreateSprintPlan.mock.calls.length;
        expect(callbackCount).toBe(1);
    });
});
