// src/pages/Offers.jsx
import React from "react";
import { Link } from "react-router-dom";

const offresExemples = [
  {
    id: 1,
    titre: "Smartphone -20%",
    image: "/images/offer-smartphone.jpg",
    description: "Profitez de 20 % de réduction sur notre gamme de smartphones premium.",
  },
  {
    id: 2,
    titre: "Casque Bluetooth -15%",
    image: "/images/offer-casque.jpg",
    description: "Casque Bluetooth avec remise de 15 % immédiatement.",
  },
  {
    id: 3,
    titre: "Accessoires offerts",
    image: "/images/offer-accessoire.jpg",
    description: "Pour tout achat, recevez un accessoire offert (coque, câble, etc.).",
  },
];

const Offers = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero / Bannière pleine largeur */}
      <div
        className="relative bg-pink-50 rounded-lg overflow-hidden mb-12"
        style={{ minHeight: "300px" }}
      >
        <img
          src="/images/offer-hero.jpg"
          alt="Offres spéciales"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-pink-600 bg-opacity-50"></div>
        <div className="relative z-10 p-8 lg:p-16 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Offres exceptionnelles chez CorreaShop
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Ne manquez pas nos promotions exclusives sur les meilleures technologies.
          </p>
          <Link
            to="/produits"
            className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Voir tous les produits
          </Link>
        </div>
      </div>

      {/* Section d’offres en cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {offresExemples.map((offre) => (
          <div
            key={offre.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={offre.image}
                alt={offre.titre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {offre.titre}
              </h2>
              <p className="text-gray-600 line-clamp-2 mb-4">
                {offre.description}
              </p>
              <Link
                to={`/offres/${offre.id}`}
                className="text-pink-600 font-semibold hover:underline"
              >
                Découvrir l’offre →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Section bonus / témoignages ou avantages */}
      <div className="bg-pink-100 rounded-lg p-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h3 className="text-3xl font-bold text-pink-800 mb-4">
            Pourquoi choisir nos offres ?
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>Remises exclusives et limitées dans le temps</li>
            <li>Produits de qualité certifiée</li>
            <li>Livraison rapide et retours faciles</li>
            <li>Support client dédié</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/images/offer-benefits.jpg"
            alt="Avantages"
            className="w-full h-auto object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
