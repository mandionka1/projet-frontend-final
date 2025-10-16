import React from "react";

const Politique = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-center text-pink-800 mb-12">
          Politique de Confidentialité
        </h1>

        {/* Disposition en grille 3 colonnes sur grand écran */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Collecte des informations
            </h2>
            <p className="text-gray-700">
              Nous collectons les informations que vous nous fournissez directement lorsque vous :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Créez un compte</li>
              <li>Passez une commande</li>
              <li>Nous contactez via le formulaire</li>
              <li>Vous abonnez à la newsletter</li>
              <li>Participez à nos promotions</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Utilisation des informations
            </h2>
            <p className="text-gray-700">Vos informations sont utilisées pour :</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Traiter vos commandes</li>
              <li>Gérer votre compte</li>
              <li>Améliorer nos services</li>
              <li>Envoyer des offres (avec consentement)</li>
              <li>Prévenir la fraude</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Partage des informations
            </h2>
            <p className="text-gray-700">Nous ne partageons vos données qu’avec :</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Nos prestataires de services</li>
              <li>Les autorités légales si nécessaire</li>
              <li>Des tiers avec votre consentement</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3"> Cookies</h2>
            <p className="text-gray-700">Nous utilisons des cookies pour :</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Mémoriser vos préférences</li>
              <li>Analyser le trafic</li>
              <li>Personnaliser votre expérience</li>
              <li>Gérer votre panier</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Sécurité des données
            </h2>
            <p className="text-gray-700">
              Nous appliquons des mesures strictes pour protéger vos données :
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Chiffrement</li>
              <li>Protocoles de sécurité</li>
              <li>Contrôles d’accès</li>
              <li>Audits réguliers</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow hover:scale-105">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3"> Vos droits</h2>
            <p className="text-gray-700">Vous disposez de plusieurs droits :</p>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
              <li>Droit d’accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l’effacement</li>
              <li>Droit d’opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Politique;

