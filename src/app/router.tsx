import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@features/auth/pages/LoginPage";
import SignupPage from "@features/auth/pages/SignupPage";
import ForgotPassword from "@features/auth/pages/ForgotPassword";
import ProtectedRoute from "./guards/ProtectedRoute";
import PublicRoute from "./guards/PublicRoute.tsx";
import PostPetPage from "@features/home/pages/PostPetPage.tsx";
import PetDetails from "@features/home/components/common/PetDetails.tsx";
import Layout from "@shared/components/layout/Layout.tsx";
import Home from "@features/home/pages/Home.tsx";
import Hero from "@features/hero/pages/Hero.tsx";
import { MapProvider } from "../features/map/components/MapProvider.tsx";
export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
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
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: (
              <MapProvider>
                <Home />
              </MapProvider>
            ),
          },
          {
            path: "/post",
            element: <PostPetPage />,
          },
          {
            path: "/pets/:id",
            element: <PetDetails></PetDetails>,
          },
        ],
      },
    ],
  },
]);
