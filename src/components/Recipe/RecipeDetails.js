import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './RecipeDetails.css'; // Import CSS file
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';

const RecipeDetails = () => {
  const location = useLocation();
  const recipe = location.state && location.state.recipe;
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const toggleFavorite = () => {
    if (favorites.some((fav) => fav.uri === recipe.uri)) {
      removeFromFavorites();
    } else {
      addToFavorites();
    }
  };

  const addToFavorites = () => {
    setFavorites([...favorites, recipe]);
  };

  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter((fav) => fav.uri !== recipe.uri);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <Navbar />
      {recipe ?
        <div className="recipe-details-container">
          <h2 className="recipe-title">{recipe.label}</h2>
          <div className="recipe-info">
            <img src={recipe.image} alt={recipe.label} className="recipe-image" />
            <div className="ingredients-table">
              <p>Ingredients:</p>
              <table>
                <thead>
                  <tr>
                    <th>Ingredient</th>
                  </tr>
                </thead>
                <tbody>
                  {recipe.ingredients.map((ingredient, index) => (
                    <tr key={index}>
                      <td>{ingredient.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="recipe-metadata">
            <p>Calories: {recipe.calories}</p>
            <p>Total Weight: {recipe.totalWeight}</p>
          </div>
          <div className="health-labels">
            <p>Health Labels:</p>
            <div className="health-labels-list">
              {recipe.healthLabels.map((label, index) => (
                <span key={index} className="health-label">{label}</span>
              ))}
            </div>
          </div>
          <div className="button-container">
            <button className="back-button" onClick={toggleFavorite} >
              {favorites.some((fav) => fav.uri === recipe.uri)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </button>
            <Link to="/dashboard" className="back-button" style={{marginLeft:20}}>Back to Dashboard</Link>
          </div>
        </div>
        :
        <p>No recipe data available.</p>
      }
    </div>
  );
};

export default RecipeDetails;
