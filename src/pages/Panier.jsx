

// pages/Panier.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Panier = () => {
  const { cart, removeFromCart, clearCart, totalPrice } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false); // nouvel état global

  // si commande terminée, on affiche le message de confirmation
  if (orderComplete) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          ✅ Commande confirmée !
        </h1>
        <p className="text-gray-700">
          Merci pour votre achat ! Votre commande est en cours de préparation.
        </p>
      </div>
    );
  }

  // si panier vide et pas encore de commande
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
        <p className="text-gray-600">
          Ajoutez des produits pour commencer votre commande.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Votre Panier</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-blue-600 font-bold">{item.price} FCFA</p>
                <p className="text-gray-600">Quantité: {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL ET BOUTONS */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-2xl font-bold">Total : {totalPrice} FCFA</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button
            onClick={clearCart}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
          >
            Vider le panier
          </button>
          <button
            onClick={() => setShowCheckout(true)} // ouvre le formulaire
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
          >
            Passer à la commande
          </button>
        </div>
      </div>

      {/* FORMULAIRE DE COMMANDE */}
      {showCheckout && (
        <CheckoutForm
          totalPrice={totalPrice}
          onOrderComplete={() => {
            setOrderComplete(true); // afficher confirmation
            clearCart(); // vider le panier APRÈS confirmation
          }}
        />
      )}
    </div>
  );
};

export default Panier;

const CheckoutForm = ({ totalPrice, onOrderComplete }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simule une confirmation
    setTimeout(() => {
      onOrderComplete(); // signale que la commande est validée
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Informations de livraison
      </h2>

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
          Total à payer : <span className="text-blue-600">{totalPrice} FCFA</span>
        </p>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
        >
          Confirmer la commande
        </button>
      </div>
    </form>
  );
};


