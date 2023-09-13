import { useContext, createContext, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState();
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
