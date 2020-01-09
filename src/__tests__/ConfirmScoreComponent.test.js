import React from 'react';
import ConfirmScoreComponent from '../components/ConfirmScoreComponent';
import { shallow } from 'enzyme';
describe('ConfirScoreComponent Tests', () => {
    const mockConfirmStoryScore = jest.fn();
    const props = {
        onConfirmStoryScore: mockConfirmStoryScore
    };

    const wrapper = shallow(<ConfirmScoreComponent {...props} />);

    it('should display input element', () => {
        expect(wrapper.find('input').length).toBe(1);
    });

    it('should display button element', () => {
        expect(wrapper.find('button').length).toBe(1);
    });

    it('should handle callback function when user submit form', () => {
        wrapper.find('input.confirm-input').simulate('change', {
            target: { value: 13 }
        });
        wrapper.find('button.confirm-button').simulate('click', {
            preventDefault: () => {}
        });

        const callbackCount = mockConfirmStoryScore.mock.calls.length;
        expect(callbackCount).toBe(1);
    });
});
