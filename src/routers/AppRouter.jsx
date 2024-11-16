// src/router/AppRouter.js
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
