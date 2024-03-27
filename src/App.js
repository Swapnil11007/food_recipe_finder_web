import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import to include Routes
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import RecipeDetails from './components/Recipe/RecipeDetails';
import FavoriteRecipes from './components/Dashboard/FavoriteRecipes';
import { FavoritesProvider } from './context/favoritesContext';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import { SearchHistoryProvider } from './context/SearchHistoryContext';

const App = () => {
  return (
    // <Provider>
    <Router>
      <FavoritesProvider>
      <SearchHistoryProvider>
        <Routes> {/* Use Routes instead of div */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoriteRecipes />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />

          {/* <Route path="/recipe/:id" render={(props) => <RecipeDetails {...props} />} /> */}
          {/* Add more routes */}
        </Routes>
        </SearchHistoryProvider>
      </FavoritesProvider>
    </Router>
    // </Provider>
  );
};

export default App;
