import { searchRecipes, getRecipeDetails, lookupRecipeByURI } from '../api';

test('searchRecipes returns data for valid query', async () => {
    const data = await searchRecipes('chicken');
    expect(data).toBeDefined();
    expect(data.length).toBeGreaterThan(0);
});

