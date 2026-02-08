import type { ChangeEvent } from "react";

type TextFieldProps = {
  id: string;
  placeholder?: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  children?: React.ReactNode;
  label?: string | null;
};
function TextField({
  id,
  value,
  placeholder,
  onChange,
  type = "text",
  required = false,
  autoComplete = "on",
  error = null,
  children,
  label,
}: TextFieldProps) {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={id} className="text-accent">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          autoComplete={autoComplete}
          required={required}
          className="bg-neutral-200 border border-neutral-300 p-1 placeholder:text-neutral-400 relative w-full"
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        ></input>
        {children}
      </div>
      {error && <span className="text-error">{error}</span>}
    </div>
  );
}

export default TextField;
