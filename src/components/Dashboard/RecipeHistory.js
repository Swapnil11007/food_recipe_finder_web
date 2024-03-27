import React from 'react';

const RecipeHistory = ({ history }) => {
  return (
    <div>
      <h3>Recipe History</h3>
      <ul>
        {history.map((recipe, index) => (
          <li key={index}>{recipe.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeHistory;
