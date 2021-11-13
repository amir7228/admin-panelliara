import { lazy } from "react";

const CustomRoute = [
  {
    path: "/projects",
    component: lazy(() => import("../../views/projects/index.js")),
  },
  {
    path: "/commingSoon",
    component: lazy(() => import("../../views/pages/misc/ComingSoon.js")),
  },
];

export default CustomRoute;
