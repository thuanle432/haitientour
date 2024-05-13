import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
      try {
        const storedUserData = localStorage.getItem('user');
        return storedUserData ? JSON.parse(storedUserData) : null;
      } catch (error) {
        console.error("Failed to parse user data from local storage:", error);
        return null;
      }
    });
    const logout = () => {
        setUser(null); 
        localStorage.removeItem('user'); 
    };
    useEffect(() => {
      try {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.removeItem('user');
        }
      } catch (error) {
        console.error("Failed to store user data in local storage:", error);
      }
    }, [user]);
  
    return (
      <UserContext.Provider value={{ user, setUser, logout }}>
        {children}
      </UserContext.Provider>
    );
  };
