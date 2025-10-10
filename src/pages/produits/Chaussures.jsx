import React from "react";
import { Link } from "react-router-dom";

const Chaussures = () => {
  const chaussuresExemples = [
    { id: 1, nom: "Baskets Sport", prix: "65 000 FCFA", image: "https://via.placeholder.com/300x300?text=Chaussure+1" },
    { id: 2, nom: "Chaussures Casual", prix: "55 000 FCFA", image: "https://via.placeholder.com/300x300?text=Chaussure+2" },
    { id: 3, nom: "Sneakers Premium", prix: "85 000 FCFA", image: "https://via.placeholder.com/300x300?text=Chaussure+3" },
    { id: 4, nom: "Chaussures Élégantes", prix: "75 000 FCFA", image: "https://via.placeholder.com/300x300?text=Chaussure+4" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Chaussures</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Chaussures
        </h1>
        <p className="text-gray-600 text-lg">
          Des chaussures tendance pour toutes les occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {chaussuresExemples.map((chaussure) => (
          <div
            key={chaussure.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={chaussure.image}
                alt={chaussure.nom}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {chaussure.nom}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                {chaussure.prix}
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

export default Chaussures;