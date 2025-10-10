
import React, { createContext, useState, useEffect } from 'react';

// Création du contexte d'authentification
export const AuthContext = createContext();

// Composant AuthProvider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Vérification de l'utilisateur lors du montage du composant
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fonction de connexion
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Valeur du contexte
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default {AuthContext, AuthProvider,};
