import { render, screen } from '@testing-library/react';
import Register from '../Register';

test('renders register form with correct heading', () => {
    render(<Register />);
    const headingElement = screen.getByText(/Register/i);
    expect(headingElement).toBeInTheDocument();
});
