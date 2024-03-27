// import React from 'react';
// import { Link } from 'react-router-dom';

// const RecipeCard = ({ recipe }) => {
//     console.log(recipe);
//   return (
//     <div className="recipe-card">
//       {/* <Link to={`/recipe/${recipe.uri.split('_')[1]}`}> */}
//       <Link to={{ pathname: `/recipe/${recipe.uri.split('_')[1]}`, state: { recipe } }}>
        
//         <img src={recipe.image} alt={recipe.label} />
//         <h3>{recipe.label}</h3>
//       </Link>
//     </div>
//   );
// };

// export default RecipeCard;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css'; 
import FavoritesContext from '../../context/favoritesContext';

const RecipeCard = ({ recipe }) => {
  
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
    <div className="recipe-card">
      <Link
        to={`/recipe/${recipe.uri.split('_')[1]}`}
        state={{ recipe }}
      >
        <img src={recipe.image} alt={recipe.label} />
        <h3>{recipe.label}</h3>
      </Link>

      <div className="favorite-button">
        {/* {isInFavorites ? (
          <button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
        ) : (
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        )} */}
              <button onClick={toggleFavorite}>
        {favorites.some((fav) => fav.uri === recipe.uri)
          ? 'Remove from Favorites'
          : 'Add to Favorites'}
      </button>

      </div>
    </div>
  );
};

export default RecipeCard;



