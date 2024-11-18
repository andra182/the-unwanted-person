// src/router/routes.js
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import Day1 from "../pages/Day1";
import Day2 from "../pages/Day2";
import Dialog1 from "../pages/Dialog1";
import Dialog2 from "../pages/Dialog2";
import PageDialog from "../pages/PageDialog";
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
      {
        path: "dialog2",
        element: <Dialog2 />, // Dialog 2 pada Day 1
      },
    ],
  },
  {
    path: "/day2",
    element: <Day2 />, // Layout untuk Day2
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />, // Dialog 1 pada Day 2
      },
      {
        path: "dialog2",
        element: <Dialog2 />, // Dialog 2 pada Day 2
      },
    ],
  },
  {
    path: "/daytest",
    element: <Day2 />, // Layout untuk Day2
    children: [
      {
        path: "dialogtest1",
        element: <Dialog1 />, // Dialog 1 pada Day 2
      },
      {
        path: "dialogtest2",
        element: <Dialog2 />, // Dialog 2 pada Day 2
      },
    ],
  },
  {
    path: "/test",
    element: <PageDialog />
  }
  // {
  //   path: "*", // Menangani route yang tidak ditemukan
  //   element: <NotFoundPage />,
  // },
]);

export default routes;
