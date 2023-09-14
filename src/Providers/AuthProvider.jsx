import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState();

  const LOCAL_STORAGE_AUTH_KEY = "authState";

  useEffect(() => {
    const userData = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY) || false;
    setState(userData);
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(data));
  }, [state]);

  return (
    <div>
      <AuthContext.Provider value={state}>
        <AuthContextDispatcher.Provider value={setState}>
          {children}
        </AuthContextDispatcher.Provider>
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
