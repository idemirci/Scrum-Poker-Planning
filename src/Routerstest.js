import React from 'react';
import { render } from '@testing-library/react';
import Routers from './Routers';

test('renders learn react link', () => {
    const { getByText } = render(<Routers />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
