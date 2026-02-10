import TextField from "../common/TextField.tsx";
import useInput from "../../hooks/useInput.tsx";
import PasswordField from "../common/PasswordField.tsx";
import Button from "../common/Button.tsx";
import useRegistration from "../../hooks/useRegistration.tsx";
import {
  isStringEmpty,
  isValidEmail,
  validatePassword,
} from "../../utils/validation.ts";
import PasswordChecklist from "../common/PasswordChecklist.tsx";

function SignupForm() {
  const { signup, loading } = useRegistration();

  const name = useInput({ validators: [isStringEmpty] });
  const email = useInput({ validators: [isStringEmpty, isValidEmail] });

  const password = useInput({ validators: [validatePassword] });
  const passwordMatch = (v: string) =>
    v !== password.text ? "Passwords do not match." : null;
  const confirmPassword = useInput({
    validators: [passwordMatch],
    validateOn: "onChange",
  });

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    try {
      await signup({
        email: email.text,
        name: name.text,
        password: password.text,
      });
    } catch {}
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
          onBlur={() => name.validate()}
        />
        <TextField
          error={email.error}
          placeholder="Email"
          type="text"
          id="EmailField"
          value={email.text}
          onChange={email.onChange}
          onBlur={() => email.validate()}
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
        />
        <Button type="submit" isLoading={loading}>
          Submit
        </Button>
      </fieldset>
    </form>
  );
}

export default SignupForm;
