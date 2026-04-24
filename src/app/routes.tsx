import { type RouteObject } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Programs } from "./pages/Programs";
import { Methodology } from "./pages/Methodology";
import { Simulation } from "./pages/Simulation";
import { Partnerships } from "./pages/Partnerships";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "programs", Component: Programs },
      { path: "methodology", Component: Methodology },
      { path: "simulation", Component: Simulation },
      { path: "partnerships", Component: Partnerships },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
];
