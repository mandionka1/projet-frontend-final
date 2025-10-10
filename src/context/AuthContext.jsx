
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifier si un utilisateur est déjà connecté au chargement
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Fonction d'inscription
  const register = async (userData) => {
    try {
      // Récupérer les utilisateurs existants
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Vérifier si l'email existe déjà
      const userExists = existingUsers.find(u => u.email === userData.email);
      if (userExists) {
        throw new Error('Cet email est déjà utilisé');
      }

      // Ajouter le nouvel utilisateur
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString()
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Connecter l'utilisateur automatiquement
      const userWithoutPassword = { ...newUser };
      delete userWithoutPassword.password;
      
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Fonction de connexion
  const login = async (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Email ou mot de passe incorrect');
      }

      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Fonction de déconnexion
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider






