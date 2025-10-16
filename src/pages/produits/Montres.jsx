
import React from "react";
import { Link } from "react-router-dom";

const Montres = () => {
  // Exemple de données de montres
  const montresExemples = [
    {
      id: 1,
      image: "/images/box-montre.jpg",
      nom: "Montre Classique",
      description:
        "Découvrez la Montre Classique, un modèle intemporel alliant élégance et précision. Parfaite pour toutes les occasions.",
    },
    {
      id: 2,
      image: "/images/watch-montre.jpg",
      nom: "Montre Sport",
      description:
        "Une montre robuste et moderne, conçue pour accompagner vos activités quotidiennes et sportives.",
    },
    {
      id: 3,
      image: "/images/luxe-montre.jpg",
      nom: "Montre Élégante",
      description:
        "Alliez style et raffinement avec cette montre au design chic et aux finitions soignées.",
    },
     {
      id: 3,
      image: "/images/montre-classe.jpg",
      nom: "Montre Élégante",
      description:
        "Alliez style et raffinement avec cette montre au design chic et aux finitions soignées.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* En-tête de la catégorie */}
      <div className="mb-10">
       
        <h1 className="text-3xl font-bold text-gray-900">Nos Montres</h1>
        <p className="text-gray-600 mt-2">
          Découvrez notre collection de montres élégantes et modernes.
        </p>
      </div>

      {/* Première montre : présentation spéciale */}
      <section className="flex flex-col md:flex-row items-center bg-pink-100 rounded-2xl shadow-md overflow-hidden mb-12">
        {/* Description à gauche */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {montresExemples[0].nom}
          </h2>
          <p className="text-gray-700 mb-5">{montresExemples[0].description}</p>
          <Link
            to="#"
            className="bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Découvrir
          </Link>
        </div>

        {/* Image à droite */}
        <div className="flex-1">
          <img
            src={montresExemples[0].image}
            alt={montresExemples[0].nom}
            className="w-full h-100 object-cover"
          />
        </div>
      </section>

      {/* Grille des autres montres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {montresExemples.slice(1).map((montre) => (
          <div
            key={montre.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white"
          >
            <img
              src={montre.image}
              alt={montre.nom}
              className="w-full h-64 object-cover hover:scale-110"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {montre.nom}
              </h2>
              <p className="text-gray-600 mt-1">{montre.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Montres;











