import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { searchRecipes } from '../../utils/api';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/main.css'; // Import main CSS file
import FavoritesContext from '../../context/favoritesContext';
import Navbar from '../navbar/Navbar';
import { useSearchHistory } from '../../context/SearchHistoryContext';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);
  const { searchHistory, addToHistory } = useSearchHistory();
  const [showHistory, setShowHistory] = useState(false);


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch available recipes
        const searchData = query ? await searchRecipes(query) : await searchRecipes('veg');
        setRecipes(searchData.hits);
        addToHistory(query);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setIsLoading(false);
        // Handle error
      }
    };

    fetchRecipes();
  }, [query]);

  const handleSearchHistoryHover = () => {
    setShowHistory(true);
  };

  const handleSearchHistoryLeave = () => {
    setShowHistory(false);
  };

  return (

    <div>
      <Navbar />
      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onMouseEnter={handleSearchHistoryHover}
          onMouseLeave={handleSearchHistoryLeave}
          className="search-bar"
        />
        {showHistory && (
          <div className="search-history">
             <h3>Search History</h3>
            <ul>
              {searchHistory.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="dashboard-container">
        <div className="recipe-cards-container">
          {isLoading ? ( // Render shimmer effect if data is loading
            <div className="shimmer-effect">
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          ) : (
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe.recipe} />
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
