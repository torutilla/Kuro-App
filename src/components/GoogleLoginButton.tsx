import useAsync from "../hooks/useAsync.tsx";
import GoogleSvg from "../assets/google-color.svg";
function GoogleLoginButton() {
  const { run, loading } = useAsync();
  const handleClick = () => {
    console.log(loading);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex p-1 border border-dark w-full justify-center rounded-2xl gap-2 text-dark items-center"
    >
      <img src={GoogleSvg} />
      <p>Sign in with Google</p>
    </button>
  );
}

export default GoogleLoginButton;
