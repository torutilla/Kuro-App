import AuthFooter from "../components/AuthFooter.tsx";
import AuthPage from "../components/AuthPage.tsx";
import SignupForm from "../components/SignupForm.tsx";

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
