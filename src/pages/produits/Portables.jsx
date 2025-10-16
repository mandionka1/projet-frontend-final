
import React from "react";
import { Link } from "react-router-dom";

const Portables = () => {
  const portablesExemples = [
    {
      id: 1,
      image: "/images/iphone-14.jpg",
      nom: "iPhone 14 Pro",
      description:"Un design élégant, une performance inégalée et un appareil photo professionnel.",
    },
    {
      id: 2,
      image: "/images/samsung-galaxy Z fold 6.jpg",
      nom: "Samsung Galaxy Z Fold 6",
      description: "Un smartphone pliable offrant une expérience multitâche unique.",
    },
    {
      id: 3,
      image: "/images/itel S25.jpeg",
      nom: "ITEL S25",
      description:"Un téléphone abordable avec une bonne autonomie et une belle finition.",
    },
    {
      id: 4,
      image: "/images/redmi 14.jpeg",
      nom: "REDMI 14",
      description:"Puissance, fluidité et photo de qualité à prix compétitif.",
    },
  ];

  const [premier, ...autres] = portablesExemples;

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Smartphones
        </h1>
        <p className="text-gray-600 text-lg">
          Les derniers smartphones des plus grandes marques.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row items-center bg-pink-100 rounded-2xl shadow-md overflow-hidden mb-12">
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 h-60 md:h-auto overflow-hidden">
          <img
            src={premier.image}
            alt={premier.nom}
            className="w-full h-100 object-cover"
          />
        </div>
       
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">{premier.nom}</h2>
          {premier.description && (
            <p className="text-gray-700">
              {premier.description}
            </p>
            
          )}
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {autres.map((portable) => (
          <div
            key={portable.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={portable.image}
                alt={portable.nom}
                className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {portable.nom}
              </h3>
              {portable.description && (
                <p className="text-gray-700">{portable.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portables;
