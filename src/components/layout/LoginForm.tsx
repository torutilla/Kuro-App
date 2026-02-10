import useLogin from "../../hooks/useLogin.tsx";
import useInput from "../../hooks/useInput.tsx";
import type { User } from "../../types/user.ts";
import Button from "../common/Button.tsx";
import PasswordField from "../common/PasswordField.tsx";
import TextField from "../common/TextField.tsx";
import { Link } from "react-router-dom";
import { useToast } from "../../hooks/useToast.tsx";
import { isStringEmpty } from "../../utils/validation.ts";

type LoginFormProps = {
  onSuccess?: (user: User) => void;
};

function LoginForm({ onSuccess }: LoginFormProps) {
  const email = useInput({ validators: [isStringEmpty] });
  const password = useInput({ validators: [isStringEmpty] });
  const { showToast } = useToast();
  const { login, loading } = useLogin();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (isStringEmpty(email.text) || isStringEmpty(password.text)) {
      showToast("One or more field cannot be empty", "error");
      email.validate();
      return;
    }
    try {
      const data = await login(email.text, password.text);
      onSuccess?.(data);
    } catch {}
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
