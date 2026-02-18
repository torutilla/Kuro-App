import type { User } from "@shared/types/user.ts";
import { saveUserInfo } from "@shared/types/localStorage/userStorage.ts";
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
