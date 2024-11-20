import Credit from "../pages/Credit";
import Dirga from "../pages/Dirga";
import HomePage from "../pages/Home";
import OpeningStory from "../pages/OpeningStory";

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
