
import React from "react";
import { Link } from "react-router-dom";

const Chaussures = () => {
  const chaussuresExemples = [
    {
      id: 1, image: "/images/soulier.jpeg", nom: "Soulier Classique RMV",
      description:"Élégantes et confortables, ces chaussures RMV apportent une touche de raffinement à toutes vos tenues. Fabriquées avec soin pour un style intemporel.",
    },
    {
      id: 2, image: "/images/walabees.jpg", nom: "Nike Air Max 90 Homme",
      description: "Un design sportif et moderne pour les amateurs de confort et de performance au quotidien.",
    },
    {
      id: 3, image: "/images/chaussures boss.jpeg", nom: "CHAUSSURES BOSS pour l'Homme",
      description: "La classe à l’état pur : des chaussures premium pour les hommes exigeants.",
    },
    {
      id: 4, image: "/images/chaussure blanc.jpg", nom: "CHAUSSURES REIKER",
      description:"Des chaussures stylées au confort inégalé, parfaites pour toutes vos sorties.",
    },
    {
      id: 5, image: "/images/crystal.jpeg", nom: "CRYSTAL QUEEN",
      description:"Des chaussures élégantes et modernes, parfaites pour briller en toute occasion.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* En-tête */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Chaussures
        </h1>
        <p className="text-gray-600 text-lg">
          Des chaussures tendance pour toutes les occasions.
        </p>
      </div>

      {/* Première chaussure : image à gauche, texte à droite */}
      <section className="flex flex-col md:flex-row items-center bg-pink-100 rounded-2xl shadow-md overflow-hidden mb-12">
        {/* Image à gauche */}
        <div className="flex-1">
          <img
            src={chaussuresExemples[0].image}
            alt={chaussuresExemples[0].nom}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Description à droite */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {chaussuresExemples[0].nom}
          </h2>
          <p className="text-gray-700 mb-5">{chaussuresExemples[0].description}</p>
          <Link
            to="#"
            className="bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Découvrir
          </Link>
        </div>
      </section>

      {/* Grille des autres chaussures (4 sur une ligne) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {chaussuresExemples.slice(1).map((chaussure) => (
          <div
            key={chaussure.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={chaussure.image}
              alt={chaussure.nom}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {chaussure.nom}
              </h3>
              <p className="text-gray-600 text-sm">{chaussure.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chaussures;

