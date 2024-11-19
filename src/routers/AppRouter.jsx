import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import firstd_routes from "../pages/Day 1/routes";
import secondd_routes from "../pages/Day 2/routes";

const combinedRoutes = [...routes, ...firstd_routes, ...secondd_routes];

const AppRouter = () => {
  const router = createBrowserRouter(combinedRoutes);

  return <RouterProvider router={router} />;
};

export default AppRouter;
