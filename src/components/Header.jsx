
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { SearchContext } from "../context/SearchContext";

const Header = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    navigate("/produits");
  };

  return (
    <header className="bg-pink-950 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="MbaShop Logo" className="h-4 w-auto" />
          <span className="text-xl font-bold text-white">CorreaShop</span>
        </Link>

        {/* Liens de navigation */}
        <nav className="hidden md:flex gap-3">
          <Link to="/" className="text-white hover:text-blue-500">Accueil</Link>
          <Link to="/produits" className="text-white hover:text-blue-500">Produits</Link>
          <Link to="/categories" className="text-white hover:text-blue-500">Catégories</Link>
          <Link to="/apropos" className="text-white hover:text-blue-500">À propos</Link>
          <Link to="/contact" className="text-white hover:text-blue-500">Contact</Link>
        </nav>

        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher..."
          onChange={handleSearch}
          className="text-white px-3 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />

        {/* Connexion / Inscription */}
        <div className="flex items-center gap-2 ml-2">
          <Link to="/connexion" className="text-white hover:text-blue-500">Se connecter</Link>
          <Link to="/inscription" className="text-white hover:text-blue-500">S'inscrire</Link>
        </div>

        {/* Icône Panier */}
        <Link to="/panier" className="relative ml-2">
          <FaShoppingCart size={24} className="text-gray-200 hover:text-blue-500" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            
          </span>
        </Link>

      </div>
    </header>
  );
};

export default Header;











