/*import React from "react";
import { Link } from "react-router-dom";

const Montres = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Montres</h1>
      <p className="text-gray-600 mb-8">
        Découvrez notre collection de montres élégantes et modernes pour toutes les occasions.
      </p>
      <Link
        to="/categories"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Retour aux catégories
      </Link>
    </div>
  );
};

export default Montres;*/





import React from "react";
import { Link } from "react-router-dom";

const Montres = () => {
  // Exemple de données de montres - à remplacer par vos vraies données
  const montresExemples = [
    {
      id: 1,
      nom: "Montre Classique",
      prix: "150 000 FCFA",
      image: "https://via.placeholder.com/300x300?text=Montre+1",
    },
    {
      id: 2,
      nom: "Montre Sport",
      prix: "200 000 FCFA",
      image: "https://via.placeholder.com/300x300?text=Montre+2",
    },
    {
      id: 3,
      nom: "Montre Élégante",
      prix: "350 000 FCFA",
      image: "https://via.placeholder.com/300x300?text=Montre+3",
    },
    {
      id: 4,
      nom: "Montre Connectée",
      prix: "180 000 FCFA",
      image: "https://via.placeholder.com/300x300?text=Montre+4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      {/* En-tête de la catégorie */}
      <div className="mb-8">
        <nav className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-gray-700">
            Accueil
          </Link>{" "}
          / <span className="text-gray-800 font-medium">Montres</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900">Nos Montres</h1>
        <p className="text-gray-600 mt-2">
          Découvrez notre collection de montres élégantes et modernes.
        </p>
      </div>

      {/* Grille de montres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {montresExemples.map((montre) => (
          <div
            key={montre.id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
          >
            <img
              src={montre.image}
              alt={montre.nom}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {montre.nom}
              </h2>
              <p className="text-gray-600 mt-1">{montre.prix}</p>
              <Link
                to={`/produit/${montre.id}`}
                className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Voir Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Montres;

