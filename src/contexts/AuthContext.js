import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

 const login = () => {
  setIsUserAuthenticated(true);
 };

 return (
  <AuthContext.Provider value={{ isUserAuthenticated, login }}>
   {children}
  </AuthContext.Provider>
 );
};

export default AuthProvider;
