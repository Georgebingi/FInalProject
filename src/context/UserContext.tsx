import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the user object
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  [key: string]: any; // Allow additional properties
}

// Define the context value type
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

// Create the context
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the props for the provider
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Load user data from localStorage on app load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.clear(); // Clear user data
    setUser(null); // Clear user state
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};