type ButtonProps = {
  children?: React.ReactNode;
  onclick?: () => void | Promise<void>;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};
type ButtonVariant = "solid" | "outline" | "icon";
function Button({
  children,
  onclick,
  isLoading = false,
  type = "button",
  variant = "solid",
}: ButtonProps) {
  const buttonVariantStyle: Record<ButtonVariant, string> = {
    solid: "bg-primary text-white",
    icon: "bg-transparent text-secondary",
    outline: "bg-transparent border border-primary text-primary",
  };
  return (
    <button
      type={type}
      className={`rounded-2xl p-1 w-full ${buttonVariantStyle[variant]}`}
      onClick={onclick}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
}

export default Button;
