
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Accueil from '../pages/Accueil';
import Apropos from '../pages/Apropos';
import Produits from '../pages/Produits';
import Categories from '../pages/Categories';
import Panier from '../pages/Panier';
import Contact from '../pages/Contact';
import Inscription from '../pages/Inscription';
import Connexion from '../pages/Connexion';
import ConditionsUtilisation from "../pages/Conditions";
import PolitiqueConfidentialite from "../pages/Politique";

// Importation des pages de catégories
import Montres from '../pages/produits/Montres';
import Parfums from '../pages/produits/Parfums';
import Chaussures from '../pages/produits/Chaussures';
import Casques from '../pages/produits/Casques';
import Ordinateurs from '../pages/produits/Ordinateurs';
import Portables from '../pages/produits/Portables';

// (Optionnel mais recommandé) une page d’erreur
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // facultatif mais utile
    children: [
      { index: true, element: <Accueil /> },
      { path: 'apropos', element: <Apropos /> },
      { path: 'produits', element: <Produits /> },
      { path: 'categories', element: <Categories /> },

      // Routes pour les sous-catégories
      { path: 'produits/montres', element: <Montres /> },
      { path: 'produits/parfums', element: <Parfums /> },
      { path: 'produits/chaussures', element: <Chaussures /> },
      { path: 'produits/casques', element: <Casques /> },
      { path: 'produits/ordinateurs', element: <Ordinateurs /> },
      { path: 'produits/portables', element: <Portables /> },

      { path: 'panier', element: <Panier /> },
      { path: 'contact', element: <Contact /> },
      { path: 'inscription', element: <Inscription /> },
      { path: 'connexion', element: <Connexion /> },
      { path: 'conditions-utilisation', element: <ConditionsUtilisation /> },
      { path: 'politique-confidentialite', element: <PolitiqueConfidentialite /> },

      // Route de secours (404)
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default router;



