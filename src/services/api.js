
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // modifie selon l’URL de ton backend
  withCredentials: true,  // si tu veux envoyer les cookies / sessions
  headers: {
    'Content-Type': 'application/json',
    // tu peux ajouter d’autres headers si besoin (ex : Authorization)
  },
});

// Gestion des réponses / erreurs (intercepteurs)
api.interceptors.response.use(
  (response) => {
    // si tout va bien, renvoie simplement la réponse
    return response;
  },
  (error) => {
    // tu peux gérer les erreurs globalement ici
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);



// Produits (liste, filtre par catégorie, détails)
export const fetchProduits = (params = {}) => {
  // params = { categorie: 'casques', page: 1, limit: 20, etc. }
  return api.get('/produits', { params });
};

export const fetchProduitById = (id) => {
  return api.get(`/produits/${id}`);
};

// Auth / Utilisateur
export const loginUser = (credentials) => {
  // credentials = { email, password }
  return api.post('/auth/login', credentials);
};

export const logoutUser = () => {
  return api.post('/auth/logout');
};

export const fetchCurrentUser = () => {
  return api.get('/auth/me');
};

export const registerUser = (userData) => {
  // userData = { nom, email, password, autres champs }
  return api.post('/auth/register', userData);
};

// Panier / commandes
export const submitOrder = (orderData) => {
  // orderData = { userId, produits: [...], adresse, total, etc. }
  return api.post('/commandes', orderData);
};

// Recherche (si tu veux faire une recherche côté backend)
export const searchProduits = (keyword) => {
  return api.get('/produits/search', {
    params: { q: keyword },
  });
};

// Export de l’instance axios par défaut
export default api;

