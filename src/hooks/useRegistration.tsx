import AuthService from "../services/authService.ts";
import type { RegistrationInput } from "../types/input.ts";
import type { User } from "../types/user.ts";
import useAsync from "./useAsync.tsx";

function useRegistration() {
  const { run, loading, error } = useAsync<User>();

  async function signup(input: RegistrationInput) {
    const user = await run(() => AuthService.signup(input));
    return user;
  }
  return { signup, loading, error };
}

export default useRegistration;
