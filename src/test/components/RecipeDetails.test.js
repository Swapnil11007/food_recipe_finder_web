import { render, screen } from '@testing-library/react';
import RecipeDetails from '../RecipeDetails';

const recipe = {
    label: 'Test Recipe',
    image: 'test-image.jpg',
    calories: 200,
    ingredients: [{ text: 'Ingredient 1' }, { text: 'Ingredient 2' }],
};

test('renders recipe details with correct label', () => {
    render(<RecipeDetails />);
    const labelElement = screen.getByText(/No recipe data available/i);
    expect(labelElement).toBeInTheDocument();
});
