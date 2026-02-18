import AuthProvider from "../features/auth/hooks/useAuth.tsx";
import ToastProvider from "../shared/hooks/useToast.tsx";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}

export default AppProviders;
