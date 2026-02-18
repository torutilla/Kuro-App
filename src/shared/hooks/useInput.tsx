import { useState } from "react";

type ValidationMode = "onBlur" | "onChange" | "onSubmit";
type Validator = (value: string) => string | null;
type UseInputOptions = {
  initialValue?: string;
  validators?: Validator[];
  validateOn?: ValidationMode;
};
type InputController = {
  validate: () => string | null;
  error: string | null;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLElement>) => void;
  reset: () => void;
};
function useInput({
  initialValue = "",
  validators = [],
  validateOn = "onBlur",
}: UseInputOptions): InputController {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  function runValidation(v: string) {
    for (const validator of validators) {
      const err = validator(v);
      if (err) {
        setError(err);
        return err;
      }
    }
    setError(null);
    return null;
  }
  function validate() {
    return runValidation(text);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement, HTMLElement>) {
    const v = e.target.value;
    setText(v);
    if (validateOn == "onChange") runValidation(v);
  }

  function reset() {
    setText(initialValue);
    setError(null);
  }

  return {
    validate,
    error,
    text,
    onChange,
    reset,
  };
}

export default useInput;
