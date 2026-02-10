import { createContext, useContext, useState } from "react";
import ToastItem from "../components/common/ToastItem.tsx";

export type Toast = {
  id: number;
  message: string;
  exiting: boolean;
  type: "success" | "error";
};
type ToastContextType = {
  showToast: (message: string, type?: "success" | "error") => void;
};
const ToastContext = createContext<ToastContextType | null>(null);

function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (
    message: string,
    type: "success" | "error" = "success",
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

    setTimeout(() => {
      dismissToast(id);
    }, 3000);
  };

  const dismissToast = (toastId: number) => {
    setToasts((prev) =>
      prev.map((t) => (t.id == toastId ? { ...t, exiting: true } : t)),
    );
  };

  const removeToast = (toastId: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-2 right-2">
        {toasts.map((toast) => {
          return (
            <ToastItem toast={toast} onRemove={removeToast} key={toast.id} />
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

export default ToastProvider;
