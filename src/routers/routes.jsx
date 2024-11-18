// src/router/routes.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Day1 from "../pages/Day1";
import Dialog1 from "../pages/Dialog1";
import PageDialog from "../pages/PageDialog";
import OpeningStory from "../pages/OpeningStory";
import Dirga from "../pages/Dirga";
// import NotFoundPage from "../pages/NotFoundPage"; // Optional, untuk halaman tidak ditemukan

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/day1",
    element: <Day1 />, // Layout untuk Day1
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />, // Dialog 1 pada Day 1
      },
    ],
  },
  {
    path: "/test",
    element: <OpeningStory />,
  },
  // {
  //   path: "*", // Menangani route yang tidak ditemukan
  //   element: <NotFoundPage />,
  // },
]);

export default routes;
