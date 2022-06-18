import React, { createContext, useState, useEffect, useContext } from 'react';
import ICartItem from '../types/cart';

type IUserContext = {
  token: string,
  setToken: (newToken: string) => void,
  removeToken: () => void
} | null;

export const UserContext = createContext<IUserContext>(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState<string>("");

  // useEffect(() => {
    
  // }, []);

  const removeToken = () => {
    setToken("");
    sessionStorage.removeItem('token');
  }

  useEffect(() => {
    if (token) sessionStorage.setItem('token', token);
    if (sessionStorage.getItem('token')) setToken(sessionStorage.getItem('token')!);
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken, removeToken }}>
      {children}
    </UserContext.Provider>
  );
};


export function useUserContext() {
  const context = useContext(UserContext);
  if (!context)
    throw new Error('useUserContext must be used whitin a AppContextProvider');
  return context;
}