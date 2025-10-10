import React from "react";
import { Link } from "react-router-dom";

const Parfums = () => {
  const parfumsExemples = [
    { id: 1, nom: "Parfum Homme Luxe", prix: "45 000 FCFA", image: "https://via.placeholder.com/300x300?text=Parfum+1" },
    { id: 2, nom: "Parfum Femme Élégance", prix: "55 000 FCFA", image: "https://via.placeholder.com/300x300?text=Parfum+2" },
    { id: 3, nom: "Eau de Toilette", prix: "35 000 FCFA", image: "https://via.placeholder.com/300x300?text=Parfum+3" },
    { id: 4, nom: "Parfum Unisexe", prix: "50 000 FCFA", image: "https://via.placeholder.com/300x300?text=Parfum+4" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Parfums</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Parfums
        </h1>
        <p className="text-gray-600 text-lg">
          Des fragrances envoûtantes pour homme et femme.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {parfumsExemples.map((parfum) => (
          <div
            key={parfum.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={parfum.image}
                alt={parfum.nom}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {parfum.nom}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                {parfum.prix}
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

export default Parfums;