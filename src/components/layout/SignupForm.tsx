import TextField from "../common/TextField.tsx";
import useInput from "../../hooks/useInput.tsx";
import PasswordField from "../common/PasswordField.tsx";
import Button from "../common/Button.tsx";
import validatePassword from "../../utils/passwordValidation.ts";
import useRegistration from "../../hooks/useRegistration.tsx";

function SignupForm() {
  const name = useInput();
  const email = useInput();
  const password = useInput(validatePassword);
  const { signup, loading } = useRegistration();
  const confirmPassword = useInput((v) =>
    v !== password.text ? "Passwords do not match." : null,
  );
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
        className="grid grid-rows-5 h-full w-full items-center"
      >
        <TextField
          placeholder="Name"
          type="text"
          id="NameField"
          value={name.text}
          onChange={name.onChange}
        />
        <TextField
          placeholder="Email"
          type="text"
          id="EmailField"
          value={email.text}
          onChange={email.onChange}
        />
        <PasswordField
          id="PasswordField"
          placeholder="Password"
          value={password.text}
          onChange={password.onChange}
          error={password.error}
        />
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
