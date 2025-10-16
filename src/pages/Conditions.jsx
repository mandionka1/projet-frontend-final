import React from "react";

const Conditions = () => {
  return (
    <div className="min-h-screen bg-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-center text-pink-800 mb-12">
          Conditions d’utilisation
        </h1>

        {/* Grille en 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Acceptation des conditions
            </h2>
            <p className="text-gray-700">
              En accédant et en utilisant CorreaShop, vous acceptez d'être lié par ces conditions 
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Utilisation du site
            </h2>
            <p className="text-gray-700">
              Vous vous engagez à utiliser ce site uniquement à des fins légales et d'une manière qui 
              ne porte pas atteinte aux droits de tiers ou qui ne restreint ou n'inhibe l'utilisation 
              et la jouissance de ce site par un tiers.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Compte utilisateur
            </h2>
            <p className="text-gray-700">
              Pour effectuer des achats sur notre site, vous devrez peut-être créer un compte. Vous êtes 
              responsable du maintien de la confidentialité de votre compte et de votre mot de passe et 
              de la restriction de l'accès à votre ordinateur.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Commandes et paiements
            </h2>
            <p className="text-gray-700">
              Toutes les commandes sont soumises à acceptation et à disponibilité. Nous nous réservons 
              le droit de refuser toute commande. Les prix incluent toutes les taxes applicables.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
              Livraison
            </h2>
            <p className="text-gray-700">
              Nous nous efforçons de livrer vos produits dans les délais indiqués. Cependant, les délais 
              de livraison sont donnés à titre indicatif et peuvent varier.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-4 border-pink-400 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-pink-700 mb-3">
               Retours et remboursements
            </h2>
            <p className="text-gray-700">
              Les retours sont acceptés dans un délai de 14 jours, à condition que les produits soient dans 
              leur état d'origine. Les frais de retour sont à la charge du client.
            </p>
          </section>
        
        </div>
      </div>
    </div>
  );
};

export default Conditions;
