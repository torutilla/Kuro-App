import AuthService from "../services/authService.ts";
import type { User } from "../types/user.ts";
import useAsync from "./useAsync.tsx";

function useLogin() {
  const { run, loading, error } = useAsync<User>();

  const login = async (email: string, password: string) => {
    return await run(() => AuthService.login(email, password));
  };

  return { login, loading, error };
}

export default useLogin;
