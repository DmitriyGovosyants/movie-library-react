import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from 'services/firebase/frebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useLocalStorage } from '../hooks/useLocalStorage';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [userLanguage, setUserLanguage] = useLocalStorage('MovieDBlang', {
    value: 'en',
    label: 'English',
  });

  useEffect(() => {
    setIsRefreshing(true);

    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsRefreshing(false);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isRefreshing, userLanguage, setUserLanguage }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
