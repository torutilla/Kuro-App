import GoogleSvg from "../assets/google-color.svg";
import useGoogleOAuth from "../hooks/useGoogleOAuth.tsx";
import type { User } from "../types/user.ts";
import Button from "./common/Button.tsx";
type GoogleLoginButtonProps = {
  onSuccess?: (user: User) => void;
};
function GoogleLoginButton({ onSuccess }: GoogleLoginButtonProps) {
  const { login, loading } = useGoogleOAuth();
  const handleClick = async () => {
    try {
      const user = await login();
      onSuccess?.(user);
    } catch {}
  };
  return (
    <Button
      color="black"
      variant="outline"
      onclick={handleClick}
      isLoading={loading}
    >
      <img src={GoogleSvg} className="p-1" />
      <p>Sign in with Google</p>
    </Button>
  );
}

export default GoogleLoginButton;
