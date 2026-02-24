import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/index.ts";
import LoadingComponent from "./LoadingComponent.tsx";

const buttonVariants = cva(
  `min-h-8 rounded-xl p-1 w-full shrink-0
  flex items-center justify-center text-sm
  cursor-pointer disabled:cursor-not-allowed`,
  {
    variants: {
      variant: {
        solid: "text-white hover:brightness-90",
        outline: "bg-transparent border",
        icon: "bg-transparent hover:brightness-90",
      },
      color: {
        primary: "",
        secondary: "",
        black: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        className: "bg-primary",
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-secondary",
      },
      {
        variant: "solid",
        color: "black",
        className: "bg-dark",
      },
      { variant: "icon", color: "primary", className: "text-primary" },
      { variant: "icon", color: "secondary", className: "text-secondary" },
      { variant: "icon", color: "black", className: "text-dark" },
      {
        variant: "outline",
        color: "primary",
        className: " border-primary text-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        className: " border-secondary text-secondary",
      },
      {
        variant: "outline",
        color: "black",
        className: "border-dark text-dark hover:bg-neutral-400/10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
    },
  },
);
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({
  type = "button",
  variant = "solid",
  color = "primary",
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ color, variant }))}
      {...props}
    >
      {disabled ? <LoadingComponent /> : children}
    </button>
  );
}

export default Button;
