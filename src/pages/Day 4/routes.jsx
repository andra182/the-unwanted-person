import Day4 from "./Day4";
import Dialog1 from "./Dialog1";
import Dialog2 from "./Dialog2";

const fourthd_routes = [
  {
    path: "/day4",
    element: <Day4 />,
    children: [
      {
        path: "dialog1",
        element: <Dialog1 />,
      },
      {
        path: "dialog2",
        element: <Dialog2 />,
      },
    ],
  },
];

export default fourthd_routes;
