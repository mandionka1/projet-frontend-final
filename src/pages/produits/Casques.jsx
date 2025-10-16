
import React from "react";
const Casques = () => {
  const casquesExemples = [
    { id: 1, image: "/images/casque.jpeg", nom: "Bose QuietComfort Ultra", description: "Casque à réduction de bruit active, idéal pour les voyages." },
    { id: 2, image: "/images/fineblue.jpeg", nom: "FINEBLUE FT-9", description: "Casque Bluetooth léger avec une autonomie de 12 heures." },
    { id: 3, image: "/images/jbl tune.jpeg", nom: "JBL Tune", description: "Son JBL Pure Bass et design confortable." },
    { id: 4, image: "/images/openrock pro silver.jpeg", nom: "Openrock Pro Silver", description: "Casque haut de gamme avec son spatial immersif." },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Collection de Casques Audio</h1>
        <p className="text-gray-600 text-lg">Une expérience sonore exceptionnelle avec nos casques haut de gamme.</p>
      </div>

      {/* Premier casque avec image à gauche et description à droite */}
      <div className="flex items-center bg-pink-500 rounded-lg shadow-xl p-6 mb-8">
        <div className="flex-shrink-0 w-1/2">
          <img src={casquesExemples[0].image} alt={casquesExemples[0].nom} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="ml-6 text-white">
          <h3 className="text-2xl font-semibold">{casquesExemples[0].nom}</h3>
          <p className="mt-2">{casquesExemples[0].description}</p>
         
        </div>
      </div>

      {/* Casques suivants alignés verticalement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {casquesExemples.slice(1).map((casque) => (
          <div key={casque.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src={casque.image} alt={casque.nom} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{casque.nom}</h3>
              <p className="text-gray-700">{casque.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casques;
