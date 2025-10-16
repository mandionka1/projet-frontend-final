import React from "react";
import { Link } from "react-router-dom";

const Ordinateurs = () => {
  const ordinateursExemples = [
    { id: 1, image: "/images/dell canada.jpeg", nom: "Ordinateur portable Dell 16 Plus", },
    { id: 2, image: "/images/macbook pro.jpeg", nom: "MacBook Pro" },
    { id: 3, image: "/images/Ordinateur Portable 15.6 Pouces.jpeg", nom: "Ordinateur Portable 15.6 Pouces" },
    { id: 4, image: "/images/lenovo.jpeg", nom: "Lenovo ThinkPad" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          💻 Collection d'Ordinateurs
        </h1>
        <p className="text-gray-600 text-lg">
          Des ordinateurs performants pour le travail, les études et le gaming.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {ordinateursExemples.slice(0, 3).map((ordinateur) => (
          <div
            key={ordinateur.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <div className="overflow-hidden bg-gray-100">
              <img
                src={ordinateur.image}
                alt={ordinateur.nom}
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {ordinateur.nom}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center bg-pink-100 rounded-2xl shadow-lg p-6">
       
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ordinateursExemples[3].image}
            alt={ordinateursExemples[3].nom}
            className="w-100 h-100 object-cover rounded-xl shadow-md"
          />
        </div>       
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            {ordinateursExemples[3].nom}
          </h3>
          <p className="text-gray-700 mb-6">
            Un ordinateur portable robuste et puissant, idéal pour le travail,
            la bureautique et les tâches multitâches. Parfait pour les
            professionnels exigeants.
          </p>
          <Link
            to="#"
            className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Découvrir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ordinateurs;
