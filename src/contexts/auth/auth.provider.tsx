import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { logoutApi, verifyApi } from "../../core/services/authService";
import { UserTypes } from "../../types/user.type";

type AuthContextType = {
  isAuthenticated: boolean | null;
  setIsAuthenticated: (value: boolean) => void;
  user: UserTypes;
  logout: () => Promise<void>;
};

type Props = PropsWithChildren;

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<any | null>(null);

  async function checkAuth() {
    try {
      const response = await verifyApi();
      setIsAuthenticated(true);
      setUser(response?.data?.user);
    } catch (error) {
      setIsAuthenticated(false);
    }
  }

  async function logout(): Promise<void> {
    try {
      await logoutApi();
      setIsAuthenticated(false);
      setUser(null);
      window.location.pathname = "/blogs";
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("error: AuthContext");
  return context;
};
