import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipeCard from '../Recipe/RecipeCard';
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';

const FavoriteRecipes = () => {
  const { favorites } = useContext(FavoritesContext);

  return (

    <div>
      <Navbar />

      <h2 style={{ textAlign: 'center' }}>Favorites</h2>

      <div className="recipe-cards-container">
        {favorites.length > 0 ? (
          favorites.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
            />
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteRecipes;