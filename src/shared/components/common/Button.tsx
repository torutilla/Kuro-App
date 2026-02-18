import clsx from "clsx";
import LoadingComponent from "./LoadingComponent.tsx";

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
      black:
        "bg-transparent border border-black text-black hover:bg-neutral-300/30",
    },
  };
  return (
    <button
      disabled={isLoading}
      type={type}
      className={clsx(
        "min-h-8 rounded-xl p-1 w-full shrink-0",
        "flex items-center justify-center text-sm",
        "cursor-pointer disabled:cursor-not-allowed",
        buttonVariantStyle[variant][color],
      )}
      onClick={onclick}
    >
      {isLoading ? <LoadingComponent /> : children}
    </button>
  );
}

export default Button;
