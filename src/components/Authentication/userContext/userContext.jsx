import { createContext, useState, useEffect } from 'react';
import { auth } from 'services/firebase/frebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext } from 'react';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

// export default UserContext;

// export const UserState = () => {
//   return useContext(UserContext);
// };
