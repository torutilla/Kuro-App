import GoogleSvg from "../assets/google-color.svg";
import useGoogleOAuth from "../hooks/useGoogleOAuth.tsx";
function GoogleLoginButton() {
  const { login, loading } = useGoogleOAuth();
  const handleClick = async () => {
    const user = await login();
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex p-1 border border-dark w-full justify-center rounded-2xl gap-2 text-dark items-center cursor-pointer"
    >
      <img src={GoogleSvg} />
      <p>Sign in with Google</p>
    </button>
  );
}

export default GoogleLoginButton;
