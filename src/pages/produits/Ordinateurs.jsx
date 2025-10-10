import React from "react";
import { Link } from "react-router-dom";

const Ordinateurs = () => {
  const ordinateursExemples = [
    { id: 1, nom: "MacBook Pro 14\"", prix: "1 200 000 FCFA", image: "https://via.placeholder.com/300x300?text=MacBook" },
    { id: 2, nom: "Dell XPS 15", prix: "950 000 FCFA", image: "https://via.placeholder.com/300x300?text=Dell" },
    { id: 3, nom: "HP Pavilion Gaming", prix: "750 000 FCFA", image: "https://via.placeholder.com/300x300?text=HP" },
    { id: 4, nom: "Lenovo ThinkPad", prix: "850 000 FCFA", image: "https://via.placeholder.com/300x300?text=Lenovo" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Ordinateurs</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection d'Ordinateurs
        </h1>
        <p className="text-gray-600 text-lg">
          Des ordinateurs performants pour le travail, les études et le gaming.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ordinateursExemples.map((ordinateur) => (
          <div
            key={ordinateur.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={ordinateur.image}
                alt={ordinateur.nom}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ordinateur.nom}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                {ordinateur.prix}
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordinateurs;