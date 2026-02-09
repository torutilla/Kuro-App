import AuthPage from "../components/layout/AuthPage.tsx";
import SignupForm from "../components/layout/SignupForm.tsx";

function SignupPage() {
  return (
    <AuthPage title="Sign Up" subtitle="Register your account" variant="signup">
      <SignupForm />
    </AuthPage>
  );
}

export default SignupPage;
