// src/Context/EmailContext.js
import { createContext, useState, useEffect } from "react";

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "";
  });

  useEffect(() => {
    localStorage.setItem("userEmail", email);
  }, [email]);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
