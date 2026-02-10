import type { ChangeEvent } from "react";
import clsx from "clsx";
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
  onBlur?: () => void;
};
function TextField({
  id,
  value,
  placeholder,
  onChange,
  type = "text",
  autoComplete = "on",
  error,
  children,
  label,
  onBlur,
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
          onBlur={onBlur}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete={autoComplete}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={clsx(
            "relative w-full rounded-lg p-2 no-default-appearance",
            "border",
            "selection:bg-secondary selection:text-white",
            "focus:outline focus:ring-1",
            {
              "bg-error/20 placeholder:text-error/20 focus:ring-error text-error border-error/20":
                !!error,
              "focus:ring-primary bg-neutral-200 placeholder:text-neutral-400 border-neutral-300":
                !error,
            },
          )}
        ></input>
        {children}
      </div>
      {error && <p className="text-error text-xs">{error}</p>}
    </div>
  );
}

export default TextField;
