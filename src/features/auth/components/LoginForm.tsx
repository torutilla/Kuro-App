import { Link } from "react-router-dom";
import PasswordField from "../components/PasswordField.tsx";
import useLogin from "../hooks/useLogin.tsx";
import { isStringEmpty } from "../utils/validation.ts";
import useInput from "@shared/hooks/useInput.tsx";
import type { User } from "@shared/types/user.ts";
import Button from "@shared/components/common/Button.tsx";
import TextField from "@shared/components/common/TextField.tsx";
import { useToast } from "@shared/hooks/useToast.tsx";

type LoginFormProps = {
  onSuccess?: (user: User) => void;
};

function LoginForm({ onSuccess }: LoginFormProps) {
  const email = useInput({ validators: [isStringEmpty] });
  const password = useInput({ validators: [isStringEmpty] });
  const { showToast } = useToast();
  const { login, loading, error } = useLogin();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const emailError = email.validate();
    const passwordError = password.validate();
    if (emailError || passwordError) {
      showToast("One or more field cannot be empty");
      return;
    }
    try {
      const data = await login(email.text, password.text);
      onSuccess?.(data);
    } catch {
      showToast("Login failed. Please try again.");
    }
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit}>
      <fieldset
        disabled={loading}
        className="grid grid-rows-[1fr_1fr_auto_1fr] gap-2 h-full w-full items-center"
      >
        <TextField
          error={email.error}
          id="email-field"
          value={email.text}
          onChange={email.onChange}
          placeholder="Email"
        />
        <PasswordField
          autoComplete="current-password"
          id="password-field"
          value={password.text}
          onChange={password.onChange}
          placeholder="Password"
          error={password.error}
        />
        <Link to="/forgot-password" className="text-sm text-primary w-fit">
          Forgot Password?
        </Link>
        <Button isLoading={loading} type="submit">
          Login
        </Button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
