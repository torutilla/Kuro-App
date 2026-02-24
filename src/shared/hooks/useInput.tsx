import { useState } from "react";
import type z from "zod/v3";

type ValidationMode = "onBlur" | "onChange" | "onSubmit";
type UseInputOptions = {
  initialValue?: string;
  validator?: z.ZodSchema;
  validateOn?: ValidationMode;
};
type InputController = {
  validate: () => string | null;
  error: string | null;
  text: string;
  setError: (msg: string | null) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLElement>) => void;
  reset: () => void;
};
function useInput({
  initialValue = "",
  validator,
  validateOn = "onBlur",
}: UseInputOptions): InputController {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  function runValidation(v: string) {
    if (!validator) return null;

    const result = validator.safeParse(v);
    if (!result.success) {
      const errMessage = result.error.errors[0]?.message || "Invalid input";
      setError(errMessage);
      return errMessage;
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
    if (error || validateOn == "onChange") runValidation(v);
  }

  function reset() {
    setText(initialValue);
    setError(null);
  }

  return {
    setError,
    validate,
    error,
    text,
    onChange,
    reset,
  };
}

export default useInput;
