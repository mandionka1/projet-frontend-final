


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, user }) => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calcul du total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Fonction de validation avant de lancer la commande
  const validateCheckout = () => {
    if (!user) {
      return "Vous devez vous connecter pour passer à la commande.";
    }
    if (!user.address || user.address.trim() === "") {
      return "Veuillez renseigner votre adresse de livraison.";
    }
    if (!user.hasPaymentMethod) {
      return "Veuillez choisir un mode de paiement valide.";
    }
    if (cartItems.length === 0) {
      return "Votre panier est vide.";
    }
    return null;  // tout est OK
  };

  const handleCheckout = async () => {
    setErrorMessage("");

    const validationError = validateCheckout();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      // Exemple d’appel API — adapte selon ton backend
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems,
          userId: user.id,
          address: user.address,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        // supposer l’erreur renvoyée contient `message`
        throw new Error(data.message || "Erreur lors de la commande");
      }

      const result = await response.json();
      // commande réussie — redirection vers confirmation
      navigate("/order-confirmation", { state: { order: result } });

    } catch (err) {
      console.error("Erreur checkout :", err);
      setErrorMessage(err.message || "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} (×{item.quantity})
              </span>
              <span>{item.price * item.quantity} FCFA</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 text-right font-semibold">Total : {total} FCFA</div>

      {errorMessage && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded flex items-center">
          <svg
            className="w-5 h-5 mr-2 text-red-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
            />
          </svg>
          {errorMessage}
        </div>
      )}

      <button
        onClick={handleCheckout}
        disabled={isSubmitting}
        className={`mt-6 w-full px-5 py-3 text-white font-semibold rounded-lg transition
          ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"}`}
      >
        {isSubmitting ? "Traitement..." : "Passer à la commande"}
      </button>
    </div>
  );
};

export default Checkout;

