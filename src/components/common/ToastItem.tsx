import { useEffect, useRef } from "react";
import type { Toast } from "../../hooks/useToast.tsx";
import { Check, Error } from "@mui/icons-material";
import clsx from "clsx";

type ToastItemProps = {
  toast: Toast;
  onRemove: (id: number) => void;
};
function ToastItem({ toast, onRemove }: ToastItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const toastStyle = `border-${toast.type} text-${toast.type}`;
  const Icon = {
    success: Check,
    error: Error,
  }[toast.type];
  useEffect(() => {
    if (!toast.exiting) return;

    const node = ref.current;
    if (!node) return;

    const handleEnd = () => {
      onRemove(toast.id);
    };
    node.addEventListener("animationend", handleEnd);

    return () => {
      node.removeEventListener("animationend", handleEnd);
    };
  }, [toast.exiting]);
  return (
    <div
      ref={ref}
      className={clsx(
        "flex gap-2 border rounded-lg px-4 py-2 toast in",
        `${toastStyle}`,
        `${toast.exiting && "out"}`,
        {
          "bg-error/8": toast.type == "error",
          "bg-success/8": toast.type == "success",
        },
      )}
    >
      {<Icon />}
      <p>{toast.message}</p>
    </div>
  );
}

export default ToastItem;
