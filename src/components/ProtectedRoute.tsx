import { useAuth } from "../hooks/useAuth.tsx";
import { Navigate, Outlet } from "react-router-dom";
import LoadingScreen from "./LoadingScreen.tsx";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen />;

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
