import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { verifyApi } from "../../core/services/authService";

type AuthContextType = {
  isAuthenticated: boolean | null;
  setIsAuthenticated: (value: boolean) => void;
};

type Props = PropsWithChildren;

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  async function checkAuth() {
    try {
      const response = await verifyApi();
      console.log(response);
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("error: AuthContext");
  return context;
};
