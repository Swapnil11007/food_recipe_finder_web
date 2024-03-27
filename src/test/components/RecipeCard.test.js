import { render, screen } from '@testing-library/react';
import RecipeCard from '../RecipeCard';

const recipe = {
    label: 'Test Recipe',
    image: 'test-image.jpg',
};

test('renders recipe card with correct label', () => {
    render(<RecipeCard recipe={recipe} />);
    const labelElement = screen.getByText(recipe.label);
    expect(labelElement).toBeInTheDocument();
});
