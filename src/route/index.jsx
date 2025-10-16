
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
import Conditions from "../pages/Conditions";
import Politique from "../pages/Politique";
import Offers from "../pages/Offers";  // correction probable du chemin

import Montres from '../pages/produits/Montres';
import Parfums from '../pages/produits/Parfums';
import Chaussures from '../pages/produits/Chaussures';
import Casques from '../pages/produits/Casques';
import Ordinateurs from '../pages/produits/Ordinateurs';
import Portables from '../pages/produits/Portables';

import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,      // App doit contenir un <Outlet />
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Accueil /> },
      { path: 'apropos', element: <Apropos /> },
      { path: 'produits', element: <Produits /> },
      { path: 'categories', element: <Categories /> },

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
      { path: 'conditions', element: <Conditions /> },
      { path: 'politique', element: <Politique /> },

      { path: 'offers', element: <Offers /> },  // pour la route “View Offers”
      
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default router;




