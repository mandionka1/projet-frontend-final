
import React from "react";
import { Link } from "react-router-dom";

const Parfums = () => {
  const parfumsExemples = [
    {
      id: 1, image: "/images/orchidee.jpg", nom: "Parfum Homme Orchidée",
      description:"Un parfum masculin et élégant, à base d’orchidée rare et de notes boisées. Idéal pour les hommes raffinés et charismatiques.",
    },
    {
      id: 2, image: "/images/perfume-bleue.jpg", nom: "Parfum Homme Luxe",
      description:"Une fragrance intense et fraîche, parfaite pour les journées d’affaires et les soirées élégantes.",
    },
    {
      id: 3, image: "/images/cosmetic-mm.jpg", nom: "Parfum Élégance Noire",
      description:"Un équilibre subtil entre puissance et douceur, pour une présence inoubliable.",
    },
    {
      id: 4, image: "/images/safe-36.jpg", nom: "Parfum Sfe-36",
      description:"Un parfum audacieux et moderne, symbole de confiance et de séduction.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* Titre principal */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Collection de Parfums
        </h1>
        <p className="text-gray-600 text-lg">
          Des fragrances envoûtantes pour homme et femme.
        </p>
      </div>

     
      <section className="flex flex-col md:flex-row items-center bg-pink-50 rounded-2xl shadow-md overflow-hidden mb-12">
        
        <div className="flex-1">
          <img
            src={parfumsExemples[0].image}
            alt={parfumsExemples[0].nom}
            className="w-full h-110 object-cover"
          />
        </div>

        
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {parfumsExemples[0].nom}
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            {parfumsExemples[0].description}
          </p>
          <Link
            to="#"
            className="bg-pink-600 text-white px-5 py-2 rounded-md hover:bg-pink-700 transition"
          >
            Découvrir
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {parfumsExemples.slice(1).map((parfum) => (
          <div
            key={parfum.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 bg-white"
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
              <p className="text-gray-600 text-sm">{parfum.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parfums;


