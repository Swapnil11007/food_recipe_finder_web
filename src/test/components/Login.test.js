import { render, screen } from '@testing-library/react';
import Login from '../Login';

test('renders login form with correct heading', () => {
    render(<Login />);
    const headingElement = screen.getByText(/Login/i);
    expect(headingElement).toBeInTheDocument();
});
