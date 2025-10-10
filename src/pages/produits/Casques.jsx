import React from "react";
import { Link } from "react-router-dom";

const Casques = () => {
  const casquesExemples = [
    { id: 1, nom: "Sony WH-1000XM5", prix: "180 000 FCFA", image: "https://via.placeholder.com/300x300?text=Sony" },
    { id: 2, nom: "AirPods Max", prix: "320 000 FCFA", image: "https://via.placeholder.com/300x300?text=AirPods" },
    { id: 3, nom: "Bose QuietComfort", prix: "200 000 FCFA", image: "https://via.placeholder.com/300x300?text=Bose" },
    { id: 4, nom: "JBL Live 660NC", prix: "120 000 FCFA", image: "https://via.placeholder.com/300x300?text=JBL" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">Casques</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Casques Audio
        </h1>
        <p className="text-gray-600 text-lg">
          Une expérience sonore exceptionnelle avec nos casques haut de gamme.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {casquesExemples.map((casque) => (
          <div
            key={casque.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={casque.image}
                alt={casque.nom}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {casque.nom}
              </h3>
              <p className="text-xl font-bold text-blue-600 mb-3">
                {casque.prix}
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

export default Casques;