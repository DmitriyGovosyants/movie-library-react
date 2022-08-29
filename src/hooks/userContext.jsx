import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from 'services/firebase/frebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

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
    <UserContext.Provider value={{ user, isRefreshing }}>
      {children}
    </UserContext.Provider>
  );
};
