import React from 'react';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('Test Header Component', () => {
    const mockUrl =
        'You can check story from  the link: http://localhost:5000/check-stories ';

    const wrapper = shallow(<Header link={mockUrl} />);

    it('should display title', () => {
        expect(wrapper.find('h2').text()).toEqual('Scrum Poker');
    });

    it('should display link', () => {
        expect(wrapper.find('span').length).toEqual(1);
    });
});
