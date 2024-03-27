import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../context/favoritesContext';

const Navbar = () => {
    const { favorites, setFavorites } = useContext(FavoritesContext);
  return (
    <div>
    {/* Navigation bar */}
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to={"/favorites"}  >Favorites</Link></li>
        <li className="nav-item"><Link to="/about">About Us</Link></li>
        <li className="nav-item"><Link to="/contactUs">Contact Us</Link></li>
        <li className="nav-item"><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
