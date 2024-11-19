import Day3 from "./Day3";
import Dialog1 from "./Dialog1";
import Dialog2 from "./Dialog2";
import Dialog3 from "./Dialog3";

const thirdd_routes = [
  {
    path: "/day3",
    element: <Day3 />,
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />,
      },
      {
        path: "dialog2",
        element: <Dialog2 />,
      },
      {
        path: "dialog3",
        element: <Dialog3 />,
      },
    ],
  },
];

export default thirdd_routes;
