import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const UserProfile = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Bienvenue, {user.name}!</p>
          <button onClick={logout}>Se déconnecter</button>
        </div>
      ) : (
        <button onClick={() => login({ name: 'Utilisateur' })}>Se connecter</button>
      )}
    </div>
  );
};

export default UserProfile;
