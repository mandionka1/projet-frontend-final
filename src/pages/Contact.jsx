
import React, { useState } from "react";
import {  FaPhone, FaEnvelope, FaMapMarkedAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ nom: "", email: "", sujet: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Contactez-nous
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Informations de contact */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Nos Coordonnées
          </h2>
          <p className="text-gray-700 mb-6">
            N'hésitez pas à nous contacter pour toute question ou demande.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <p className="text-gray-700">contact@correashop.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhone className="text-green-600 text-2xl" />
            <p className="text-gray-700">+221 77 426 68 48</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkedAlt className="text-red-600 text-2xl" />
            <p className="text-gray-700">Dakar, Sénégal</p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300"
    >
      <FaInstagram className="text-pink-950" />
    </a>
             <a
      href="https://www.facebook.com/ta.page"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300"
    >
      <FaFacebook className="text-pink-950" />
    </a>
              <a
      href="https://twitter.com/ton_compte"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300"
    >
      <FaTwitter className="text-pink-950" />
    </a>
              <a
      href="https://www.linkedin.com/in/ton-profil"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-200 hover:bg-pink-300 p-3 rounded-full transition duration-300"
    >
      <FaLinkedin className="text-pink-950" />
    </a>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Envoyez-nous un message
          </h2>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Merci ! Votre message a été envoyé avec succès.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nom"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nom complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="sujet"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Sujet *
              </label>
              <input
                type="text"
                id="sujet"
                name="sujet"
                value={formData.sujet}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-950 text-white py-3 rounded-lg font-semibold hover:bg-pink-900 transition duration-200"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Trouvez-nous sur la carte
        </h2>
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Localisation CorreaShop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61983.40616840846!2d-17.483234799999998!3d14.716677849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1728be37bb9f9%3A0x26d6c7362c343dfb!2sDakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1694441412345!5m2!1sfr!2ssn"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;



