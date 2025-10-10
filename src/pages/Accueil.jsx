
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import montre3 from "../assets/montre3.jpg";

const Accueil = () => {
  const navigate = useNavigate();
  const [userLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNavigate = (path) => {
    // Réinitialiser l’erreur
    setErrorMessage("");

    if (!userLoggedIn) {
      setErrorMessage("Vous devez vous connecter pour effectuer cette action.");
      return;
    }
    navigate(path);
  };

  // Exemple : si userLoggedIn change, on peut effacer l’erreur automatiquement
  useEffect(() => {
    if (userLoggedIn) {
      setErrorMessage("");
    }
  }, [userLoggedIn]);

  return (
    <section id="home" className="bg-amber-50 scroll-mt-20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4">
            Discover The Best Deals on Top Products
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Faites-vous plaisir sans vous ruiner : les meilleurs deals sur vos produits préférés.
          </p>

          {errorMessage && (
            <div className="mb-4 px-4 py-2 bg-red-100 text-red-700 rounded">
              {errorMessage}
            </div>
          )}

          <div className="flex justify-center lg:justify-start gap-4">
            <button
              onClick={() => handleNavigate("/products")}
              className="px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-600 transition"
            >
              Shop Now
            </button>
            <button
              onClick={() => handleNavigate("/offers")}
              className="px-6 py-3 border border-pink-500 text-pink-600 text-sm font-semibold rounded-lg hover:bg-pink-200 transition"
            >
              View Offers
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img src={montre3} alt="Hero montre" />
        </div>
      </div>
    </section>
  );
};

export default Accueil;









