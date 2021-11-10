import { lazy } from "react";

const CustomRoute = [
  {
    path: "/commingSoon",
    component: lazy(() => import("../../views/pages/misc/ComingSoon.js")),
  },
];

export default CustomRoute;
