import TextField from "@shared/components/common/TextField.tsx";
import useInput from "@shared/hooks/useInput.tsx";
import Button from "@shared/components/common/Button.tsx";
import { useToast } from "@shared/hooks/useToast.tsx";
import PasswordField from "../components/PasswordField.tsx";
import useRegistration from "../hooks/useRegistration.tsx";
import PasswordChecklist from "../components/PasswordChecklist.tsx";
import { SignupSchema } from "../schema/authSchema.ts";

function SignupForm() {
  const { signup, loading } = useRegistration();
  const { showToast } = useToast();
  const signupShape = SignupSchema.innerType().shape;
  const name = useInput({ validator: signupShape.name });
  const email = useInput({ validator: signupShape.email });

  const password = useInput({ validator: signupShape.password });
  const confirmPassword = useInput({
    validator: signupShape.confirmPassword,
  });

  const onSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    const inputs = [name, email, password, confirmPassword];
    for (let input of inputs) {
      const error = input.validate();
      if (error) {
        showToast(error);
        return;
      }
    }

    try {
      await signup({
        email: email.text,
        name: name.text,
        password: password.text,
      });
    } catch {
      showToast("Signup failed. Please try again.", "error");
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
        <PasswordChecklist text={password.text} />
        <PasswordField
          id="ConfirmPassField"
          placeholder="Confirm Password"
          value={confirmPassword.text}
          onChange={confirmPassword.onChange}
          error={confirmPassword.error}
          onBlur={confirmPassword.validate}
        />
        <Button type="submit" disabled={loading}>
          Submit
        </Button>
      </fieldset>
    </form>
  );
}

export default SignupForm;
