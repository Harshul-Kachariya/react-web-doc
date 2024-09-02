import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.tsx"));
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseState from "./components/Hooks/useState.tsx";
import CuatomHook from "./components/Hooks/CustomHooks/CustomHook.tsx";
import WindowWidthComponent from "./components/Hooks/CustomHooks/WindowWidthComponent.tsx";
const GetStarted = lazy(() => import("./components/Home/GetStarted.tsx"));

// const UseState = lazy(() => import("./components/useState.tsx"));

const Homepage = lazy(() => import("./components/Home/index.tsx"));

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
