import { useEffect, useRef } from "react";
import type { Toast } from "../../hooks/useToast.tsx";

type ToastItemProps = {
  toast: Toast;
  onRemove: (id: number) => void;
};
function ToastItem({ toast, onRemove }: ToastItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const toastStyle = `bg-${toast.type}/40 border border-${toast.type} text-${toast.type}`;
  useEffect(() => {
    if (!toast.exiting) return;

    const node = ref.current;
    if (!node) return;

    const handleEnd = () => {
      onRemove(toast.id);
    };
    node.addEventListener("animationend", handleEnd);

    return node.removeEventListener("animationend", handleEnd);
  }, [toast.exiting]);
  return (
    <div
      ref={ref}
      className={`${toastStyle} rounded-lg px-4 py-2 toast in ${toast.exiting && "out"}`}
    >
      <p>{toast.message}</p>
    </div>
  );
}

export default ToastItem;
