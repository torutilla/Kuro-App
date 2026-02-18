import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@shared/types/user.ts";
import useAsync from "@shared/hooks/useAsync.tsx";
import fetchHandler from "@shared/utils/fetchHandler.ts";

type AuthContextType = {
  user?: User | null;
  loading: boolean;
};
const AuthContext = createContext<AuthContextType | null>(null);
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { run, loading } = useAsync<User>();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await run(() => fetchHandler("/"));
        setUser(res);
      } catch {
        setUser(null);
      }
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Provider not attached");
  return context;
}
