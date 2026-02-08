import { useState } from "react";

function useInput(validator?: (v: string) => string | null, initialValue = "") {
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement, HTMLElement>) {
    const v = e.target.value;
    setText(v);
    if (validator) {
      setError(validator(v));
    }
  }

  function reset() {
    setText(initialValue);
  }

  return {
    error,
    text,
    onChange,
    reset,
  };
}

export default useInput;
