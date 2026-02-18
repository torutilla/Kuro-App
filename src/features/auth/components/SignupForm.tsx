import TextField from "@shared/components/common/TextField.tsx";
import useInput from "@shared/hooks/useInput.tsx";
import PasswordField from "../components/PasswordField.tsx";
import Button from "@shared/components/common/Button.tsx";
import useRegistration from "../hooks/useRegistration.tsx";
import {
  isStringEmpty,
  isValidEmail,
  validatePassword,
} from "../utils/validation.ts";
import PasswordChecklist from "../components/PasswordChecklist.tsx";
import { useToast } from "@shared/hooks/useToast.tsx";

function SignupForm() {
  const { signup, loading } = useRegistration();
  const { showToast } = useToast();
  const name = useInput({ validators: [isStringEmpty] });
  const email = useInput({ validators: [isStringEmpty, isValidEmail] });

  const password = useInput({ validators: [isStringEmpty, validatePassword] });
  const passwordMatch = (v: string) =>
    v !== password.text ? "Passwords do not match." : null;
  const confirmPassword = useInput({
    validators: [isStringEmpty, passwordMatch],
    validateOn: "onChange",
  });

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const nameError = name.validate();
    const emailError = email.validate();
    const passwordError = password.validate();
    const confirmPasswordError = confirmPassword.validate();

    if (nameError || emailError || passwordError || confirmPasswordError) {
      return;
    }

    try {
      await signup({
        email: email.text,
        name: name.text,
        password: password.text,
      });
    } catch {
      showToast("Sign Up failed. Please try again.", "error");
    }
  };

  return (
    <form className="w-full h-full" onSubmit={onSubmit}>
      <fieldset
        disabled={loading}
        className="grid grid-rows-6 h-full w-full items-center gap-1"
      >
        <TextField
          error={name.error}
          placeholder="Name"
          type="text"
          id="NameField"
          value={name.text}
          onChange={name.onChange}
          onBlur={name.validate}
        />
        <TextField
          error={email.error}
          placeholder="Email"
          type="text"
          id="EmailField"
          value={email.text}
          onChange={email.onChange}
          onBlur={email.validate}
        />
        <PasswordField
          id="PasswordField"
          placeholder="Password"
          value={password.text}
          onChange={password.onChange}
          error={password.error}
        />
        <PasswordChecklist value={password.text} />
        <PasswordField
          id="ConfirmPassField"
          placeholder="Confirm Password"
          value={confirmPassword.text}
          onChange={confirmPassword.onChange}
          error={confirmPassword.error}
          onBlur={confirmPassword.validate}
        />
        <Button type="submit" isLoading={loading}>
          Submit
        </Button>
      </fieldset>
    </form>
  );
}

export default SignupForm;
