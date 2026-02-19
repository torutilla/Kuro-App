import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@features/auth/pages/LoginPage";
import SignupPage from "@features/auth/pages/SignupPage";
import ForgotPassword from "@features/auth/pages/ForgotPassword";
import Home from "@/features/home/pages/Home.tsx";
import ProtectedRoute from "./guards/ProtectedRoute";
import PublicRoute from "./guards/PublicRoute.tsx";
export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
