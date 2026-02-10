import GoogleLoginButton from "../components/GoogleLoginButton.tsx";
import LoginForm from "../components/layout/LoginForm.tsx";
import usePostLogin from "../hooks/usePostLogin.tsx";
import AuthPage from "../components/layout/AuthPage.tsx";
import OrDivider from "../components/common/OrDivider.tsx";
import AuthFooter from "../components/layout/AuthFooter.tsx";

function LoginPage() {
  const postLogin = usePostLogin();
  return (
    <AuthPage
      title="Welcome back!"
      variant="login"
      subtitle="Login to continue"
    >
      <LoginForm onSuccess={postLogin} />
      <OrDivider />
      <GoogleLoginButton onSuccess={postLogin} />
      <AuthFooter
        link={{ label: "Sign up", to: "/signup" }}
        label="Don't have an account? "
      />
    </AuthPage>
  );
}

export default LoginPage;
