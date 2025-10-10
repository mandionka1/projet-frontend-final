import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { id: 1, name: "Montres", path: "/produits/montres" },
    { id: 2, name: "Parfums", path: "/produits/parfums" },
    { id: 3, name: "Chaussures", path: "/produits/chaussures" },
    { id: 4, name: "Portables", path: "/produits/portables" },
    { id: 5, name: "Casques", path: "/produits/casques" },
    { id: 6, name: "Ordinateurs", path: "/produits/ordinateurs" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Catégories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="block border rounded-2xl p-8 text-center bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-700">{cat.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
