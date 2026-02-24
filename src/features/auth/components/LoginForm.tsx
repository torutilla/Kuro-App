import { Link } from "react-router-dom";
import PasswordField from "../components/PasswordField.tsx";
import useLogin from "../hooks/useLogin.tsx";
import useInput from "@shared/hooks/useInput.tsx";
import type { User } from "@shared/types/user.ts";
import Button from "@shared/components/common/Button.tsx";
import TextField from "@shared/components/common/TextField.tsx";
import { useToast } from "@shared/hooks/useToast.tsx";
import { LoginSchema } from "../schema/authSchema.ts";

type LoginFormProps = {
  onSuccess?: (user: User) => void;
};

function LoginForm({ onSuccess }: LoginFormProps) {
  const email = useInput({
    validator: LoginSchema.shape.email,
    validateOn: "onChange",
  });
  const password = useInput({ validator: LoginSchema.shape.password });
  const { showToast } = useToast();
  const { login, loading } = useLogin();
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const inputs = [email, password];
    for (let input of inputs) {
      const error = input.validate();
      if (error) {
        showToast(error);
        return;
      }
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
          onBlur={email.validate}
        />
        <PasswordField
          autoComplete="current-password"
          id="password-field"
          value={password.text}
          onChange={password.onChange}
          placeholder="Password"
          error={password.error}
          onBlur={password.validate}
        />
        <Link to="/forgot-password" className="text-sm text-primary w-fit">
          Forgot Password?
        </Link>
        <Button disabled={loading} type="submit">
          Login
        </Button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
