import { ReactNode } from "react";
import Demo from "../components/Demo";

type rotes = {
  path: string;
  element: ReactNode;
};

export const protectedRoutes: rotes[] = [
  {
    path: "/demo",
    element: <Demo />,
  },
];
