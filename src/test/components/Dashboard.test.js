import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

test('renders dashboard heading', () => {
    render(<Dashboard />);
    const headingElement = screen.getByText(/User Dashboard/i);
    expect(headingElement).toBeInTheDocument();
});
