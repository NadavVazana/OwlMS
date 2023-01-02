// @ts-nocheck
import { ReactElement } from "react";
import { ItemPage } from "../src/pages/item-page";
import { HomePage } from "../src/pages/home-page";
type Route = {
  path: string;
  element: ReactElement;
};

const routes: Route[] = [
  {
    path: "item/:itemId",
    element: <ItemPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
];

export default routes;
