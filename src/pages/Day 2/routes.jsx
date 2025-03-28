import Day2 from "./Day2";
import Dialog1 from "./Dialog1";
import Dialog2 from "./Dialog2";
import Dialog3 from "./Dialog3";

const secondd_routes = [
  {
    path: "/day2",
    element: <Day2 />,
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

export default secondd_routes;
