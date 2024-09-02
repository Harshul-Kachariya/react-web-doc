import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.tsx"));
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Home/index.tsx";
import GetStarted from "./components/Home/GetStarted.tsx";
import UseState from "./components/Hooks/useState.tsx";
import CuatomHook from "./components/Hooks/CustomHooks/CustomHook.tsx";
import WindowWidthComponent from "./components/Hooks/CustomHooks/WindowWidthComponent.tsx";
import UseEffect from "./components/Hooks/useEffect.tsx";
import UseMemo from "./components/Hooks/useMemo.tsx";
import UseRef from "./components/Hooks/useRef.tsx";
import UseCallback from "./components/Hooks/useCallback.tsx";
import UseContext from "./components/Hooks/useContext.tsx";
import UseReducer from "./components/Hooks/useReducer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>Laoding...</>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/gettingSarted",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <GetStarted />
          </Suspense>
        ),
      },
      {
        path: "/hooks/useState",
        element: (
          // <Suspense fallback={<>Laoding...</>}>
          <UseState />
          // </Suspense>
        ),
      },
      {
        path: "/hooks/customHooks",
        element: (
          // <Suspense fallback={<>Laoding...</>}>
          <CuatomHook />
          // </Suspense>
        ),
      },
      {
        path: "/output/customHooks",
        element: (
          // <Suspense fallback={<>Laoding...</>}>
          <WindowWidthComponent />
          // </Suspense>
        ),
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
