import AuthFooter from "../components/layout/AuthFooter.tsx";
import AuthPage from "../components/layout/AuthPage.tsx";
import SignupForm from "../components/layout/SignupForm.tsx";

function SignupPage() {
  return (
    <AuthPage title="Sign Up" subtitle="Register your account" variant="signup">
      <SignupForm />
      <AuthFooter
        label="Already have an account? "
        link={{ label: "Login", to: "/login" }}
      />
    </AuthPage>
  );
}

export default SignupPage;
