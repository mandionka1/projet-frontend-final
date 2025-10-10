
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">CorreaShop</h2>
          <p>
            Votre boutique en ligne pour montres, parfums, chaussures, portables, casques et marques d'ordinateurs.  
            Achetez en toute sécurité et recevez vos produits rapidement.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Liens utiles</h3>
          <ul className="space-y-2">
            <li><Link to="/apropos" className="hover:text-white">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/politique" className="hover:text-white">Politique de confidentialité</Link></li>
            <li><Link to="/conditions" className="hover:text-white">Conditions d’utilisation</Link></li>
          </ul>
        </div>

        {/* Catégories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Catégories</h3>
          <ul className="space-y-2">
            <li><Link to="/produits/montres" className="hover:text-white">Montres</Link></li>
            <li><Link to="/produits/parfums" className="hover:text-white">Parfums</Link></li>
            <li><Link to="/produits/chaussures" className="hover:text-white">Chaussures</Link></li>
            <li><Link to="/produits/portables" className="hover:text-white">Portables</Link></li>
            <li><Link to="/produits/casques" className="hover:text-white">Casques</Link></li>
            <li><Link to="/produits/ordinateurs" className="hover:text-white">Ordinateurs</Link></li>
          </ul>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CorreaShop. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;


