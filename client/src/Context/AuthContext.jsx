import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const logIn = localStorage.getItem("logIn");
    if (logIn) {
      setAuthState(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
