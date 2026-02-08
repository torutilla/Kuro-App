import type { User } from "../types/user.ts";
import fetchHandler from "../utils/fetchHandler.ts";
import useAsync from "./useAsync.tsx";

async function useGoogleOAuth() {
  const { run, loading, error } = useAsync<User>();
  async function login() {
    return await run(() => fetchHandler(`/auth/google`));
  }
  return { login, loading, error };
}

export default useGoogleOAuth;
