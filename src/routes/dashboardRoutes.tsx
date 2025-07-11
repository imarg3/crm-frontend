import {
  HomeIcon,
  UserCircleIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "../pages/dashboard";
import { SignIn, SignUp } from "../modules/auth";
import Booking from "../features/bookings/Booking";
import { Leads } from "../features/leads/Leads";
import Proposal from "../features/proposals/Proposal";
import Itinerary from "../features/itinerary/Itinerary";

import { RouteObject } from "react-router-dom";
import ProtectedRoute from "../modules/auth/ProtectedRoute";

// 1. Keep this for side navigation/menu
export const navigationConfig = [
  {
    layout: "dashboard",
    pages: [
      { icon: <HomeIcon className="w-5 h-5 text-inherit" />, name: "dashboard", path: "/home", element: <Home /> },
      { icon: <UserCircleIcon className="w-5 h-5 text-inherit" />, name: "profile", path: "/profile", element: <Profile /> },
      { icon: <BellIcon className="w-5 h-5 text-inherit" />, name: "notifications", path: "/notifactions", element: <Notifications /> },
      { path: "/leads", element: <Leads /> },
      { path: "/proposals", element: <Proposal /> },
      { path: "/bookings", element: <Booking /> },
      { path: "/itinerary", element: <Itinerary /> }
    ]
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      { icon: <ArrowRightOnRectangleIcon className="w-5 h-5 text-inherit" />, name: "sign in", path: "/sign-in", element: <SignIn /> },
      { icon: <UserPlusIcon className="w-5 h-5 text-inherit" />, name: "sign up", path: "/sign-up", element: <SignUp /> }
    ]
  }
];

// 2. Transform navigation config into React Router-compatible RouteObject[]
export const dashboardRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      { path: "home", element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "notifactions", element: <Notifications /> },
      { path: "leads", element: <Leads /> },
      { path: "proposals", element: <Proposal /> },
      { path: "bookings", element: <Booking /> },
      { path: "itinerary", element: <Itinerary /> }
    ]
  }
];

export default navigationConfig;