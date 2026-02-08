import type { User } from "../types/user.ts";
import { saveUserInfo } from "../utils/localStorage/userStorage.ts";
import { useNavigate } from "react-router-dom";
function usePostLogin() {
  const navigate = useNavigate();
  const postLogin = (user: User) => {
    try {
      saveUserInfo(user);
      navigate("/");
    } catch (error) {
      console.error("Failed to save user info.", error);
    }
  };
  return postLogin;
}

export default usePostLogin;
