import React from "react";
import { Link } from "react-router-dom";

const Portables = () => {
  const portablesExemples = [
    { id: 1, nom: "iPhone 15 Pro", prix: "650 000 FCFA", image: "https://via.placeholder.com/300x300?text=iPhone" },
    { id: 2, nom: "Samsung Galaxy S24", prix: "550 000 FCFA", image: "https://via.placeholder.com/300x300?text=Samsung" },
    { id: 3, nom: "Xiaomi 13 Pro", prix: "450 000 FCFA", image: "https://via.placeholder.com/300x300?text=Xiaomi" },
    { id: 4, nom: "Google Pixel 8", prix: "500 000 FCFA", image: "https://via.placeholder.com/300x300?text=Pixel" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Portables</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Smartphones
        </h1>
        <p className="text-gray-600 text-lg">
          Les derniers smartphones des plus grandes marques.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portablesExemples.map((portable) => (
          <div
            key={portable.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={portable.image}
                alt={portable.nom}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {portable.nom}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                {portable.prix}
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

export default Portables;