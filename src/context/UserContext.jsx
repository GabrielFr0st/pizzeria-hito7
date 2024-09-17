import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const login = () => {
    setToken(true);
  };

  const logout = () => {
    setToken(false);
  };

  const contextValue = {
    token,
    login,
    logout
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
