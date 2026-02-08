import LoginForm from "../components/layout/LoginForm.tsx";
import usePostLogin from "../hooks/usePostLogin.tsx";

function LoginPage() {
  const postLogin = usePostLogin();
  return (
    <div className="h-dvh w-dvw">
      <LoginForm onSuccess={postLogin} />
    </div>
  );
}

export default LoginPage;
