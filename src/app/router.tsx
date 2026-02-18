import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@features/auth/pages/LoginPage";
import SignupPage from "@features/auth/pages/SignupPage";
import ForgotPassword from "@features/auth/pages/ForgotPassword";
import Home from "@features/pets/pages/Home";
import ProtectedRoute from "./protected/ProtectedRoute";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
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
