import mainRoutes from "./mainRoutes";
import { dashboardRoutes } from "./dashboardRoutes";  // named import

export const allRoutes = [...mainRoutes, ...dashboardRoutes];
