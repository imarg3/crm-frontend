import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "../modules/auth";

// Lazy load your components if needed
const Home = lazy(() => import("../pages/home/Home"));
const SignIn = lazy(() => import("../modules/auth/sign-in"));
const SignUp = lazy(() => import("../modules/auth/sign-up"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));

import { RouteObject } from "react-router-dom";

const mainRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "*",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export default mainRoutes;
