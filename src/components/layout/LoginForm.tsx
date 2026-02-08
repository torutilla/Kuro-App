import useLogin from "../../hooks/useLogin.tsx";
import useInput from "../../hooks/useInput.tsx";
import type { User } from "../../types/user.ts";
import validatePassword from "../../utils/passwordValidation.ts";
import Button from "../common/Button.tsx";
import PasswordField from "../common/PasswordField.tsx";
import TextField from "../common/TextField.tsx";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../GoogleLoginButton.tsx";

type LoginFormProps = {
  onSuccess?: (user: User) => void;
};

function LoginForm({ onSuccess }: LoginFormProps) {
  const email = useInput();
  const password = useInput(validatePassword);
  const { login, loading } = useLogin();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (email.error || password.error) return;
    try {
      const data = await login(email.text, password.text);
      onSuccess?.(data);
    } catch {}
  };

  return (
    <form
      className="flex flex-col items-center p-2 w-full"
      onSubmit={handleSubmit}
    >
      <TextField
        required={true}
        id="email-field"
        value={email.text}
        onChange={email.onChange}
        placeholder="Enter your email"
      />
      <PasswordField
        autoComplete="current-password"
        required={true}
        id="password-field"
        value={password.text}
        onChange={password.onChange}
        placeholder="Enter your password"
        error={password.error}
      />
      <Button isLoading={loading} type="submit">
        Login
      </Button>
      <GoogleLoginButton />
      <p>
        Don't have an account?
        <span>
          <Link to={"/signup"}> Sign-up</Link>
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
