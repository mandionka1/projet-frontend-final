import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">
        Oups 😢 La page que vous cherchez est introuvable.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default ErrorPage;
