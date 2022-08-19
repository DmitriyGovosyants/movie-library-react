import { createContext, useState, useEffect } from 'react';
import { auth } from 'services/firebase/frebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  console.log(isRefreshing);

  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   });
  // }, []);

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
    // .then(console.log)
    // .catch(console.log)
    // .finally(setIsRefreshing(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, isRefreshing }}>
      {children}
    </UserContext.Provider>
  );
};
