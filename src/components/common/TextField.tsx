import type { ChangeEvent } from "react";

type TextFieldProps = {
  id: string;
  placeholder?: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
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
  autoComplete = "on",
  error = null,
  children,
  label,
}: TextFieldProps) {
  return (
    <div className="flex flex-col w-full p-1">
      {label && (
        <label htmlFor={id} className="text-accent">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete={autoComplete}
          className={`
        bg-neutral-200 
          border border-neutral-300 p-2
        placeholder:text-neutral-400 
          relative w-full rounded-lg 
          no-default-appearance focus:outline
          focus:ring-1 focus:ring-primary 
          ${error && "focus:ring-error"}
        selection:bg-secondary selection:text-white`}
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
