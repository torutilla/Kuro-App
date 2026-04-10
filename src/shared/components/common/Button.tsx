import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/index.ts";
import LoadingComponent from "./LoadingComponent.tsx";

const buttonVariants = cva(
  `min-h-8 rounded-xl p-2 px-4 w-auto shrink-0
  flex items-center justify-center text-sm
  cursor-pointer disabled:cursor-not-allowed
  disabled:opacity-85`,
  {
    variants: {
      variant: {
        solid: "text-white hover:brightness-85 ",
        outline: "bg-transparent border hover:bg-primary/5",
        icon: "bg-transparent hover:brightness-85",
      },
      color: {
        primary: "",
        secondary: "",
        black: "",
        grayscale: "",
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
        className: "bg-black",
      },
      {
        variant: "solid",
        color: "grayscale",
        className: "bg-neutral-300 text-black",
      },
      { variant: "icon", color: "primary", className: "text-primary" },
      { variant: "icon", color: "secondary", className: "text-secondary" },
      { variant: "icon", color: "black", className: "text-black" },

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
        className: "border-black text-black hover:bg-neutral-400/20",
      },
      {
        variant: "outline",
        color: "grayscale",
        className: "border-neutral-300 text-black",
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
  className,
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
      {...props}
      className={cn(buttonVariants({ color, variant }), className)}
    >
      {disabled ? <LoadingComponent /> : children}
    </button>
  );
}

export default Button;
