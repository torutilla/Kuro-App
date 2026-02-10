type ButtonColor = "primary" | "secondary" | "black";
type ButtonVariant = "solid" | "outline" | "icon";
type ButtonProps = {
  children?: React.ReactNode;
  onclick?: () => void | Promise<void>;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  color?: ButtonColor;
};
function Button({
  children,
  onclick,
  isLoading = false,
  type = "button",
  variant = "solid",
  color = "primary",
}: ButtonProps) {
  const buttonVariantStyle: Record<
    ButtonVariant,
    Record<ButtonColor, string>
  > = {
    solid: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      black: "bg-black text-white",
    },
    icon: {
      primary: "bg-transparent text-primary",
      secondary: "bg-transparent text-secondary",
      black: "bg-transparent text-black",
    },
    outline: {
      primary: "bg-transparent border border-primary text-primary",
      secondary: "bg-transparent border border-secondary text-secondary",
      black: "bg-transparent border border-black text-black",
    },
  };
  return (
    <button
      type={type}
      className={`
        rounded-xl p-1 w-full flex items-center justify-center
        ${buttonVariantStyle[variant][color]} 
        cursor-pointer 
        `}
      onClick={onclick}
    >
      {isLoading ? "Loading" : children}
    </button>
  );
}

export default Button;
