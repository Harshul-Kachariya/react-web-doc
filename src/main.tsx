import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UseState from "./components/hooks/useState.tsx";
import UseEffect from "./components/hooks/useEffect.tsx";
import UseMemo from "./components/hooks/useMemo.tsx";
import UseContext from "./components/hooks/useContext.tsx";
import UseRef from "./components/hooks/useRef.tsx";
import UseCallback from "./components/hooks/useCallBack.tsx";
import UseReducer from "./components/hooks/useReducer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/hooks/useState",
        element: <UseState />,
      },
      {
        path: "/hooks/useEffect",
        element: <UseEffect />,
      },
      {
        path: "/hooks/useMemo",
        element: <UseMemo />,
      },
      {
        path: "/hooks/useRef",
        element: <UseRef />,
      },
      {
        path: "/hooks/useCallback",
        element: <UseCallback />,
      },
      {
        path: "/hooks/useContext",
        element: <UseContext />,
      },
      {
        path: "/hooks/useReducer",
        element: <UseReducer />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
