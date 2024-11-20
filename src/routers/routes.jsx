import Credit from "../pages/Credit";
import HomePage from "../pages/Home";
import OpeningStory from "../pages/OpeningStory";
import Dirga from "../pages/Dirga";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/credit",
    element: <Credit />,
  },
  {
    path: "/test",
    element: <Dirga />,
  },
];

export default routes;
