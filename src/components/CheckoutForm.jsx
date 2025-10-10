import axios from "axios";
import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutForm = ({ onOrderComplete }) => {
  const { cart, clearCart } = useContext(CartContext); // récupérer le panier
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Envoi des informations de commande + panier
      await axios.post("http://localhost:5000/api/orders", {
        customer: formData,
        products: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      });

      onOrderComplete(); // ✅ confirmation côté front
      clearCart();        // vider le panier
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'envoi de la commande. Réessayez !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Informations de livraison
      </h2>

      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Entrez votre nom"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Ex: 77 123 45 67"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Adresse</label>
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Votre adresse complète"
        ></textarea>
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold mb-4">
          Total à payer :{" "}
          <span className="text-blue-600">
            {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} FCFA
          </span>
        </p>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Confirmer la commande"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
