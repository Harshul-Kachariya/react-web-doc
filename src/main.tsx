import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.tsx"));
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Home/index.tsx";
import GetStarted from "./components/Home/GetStarted.tsx";

import CuatomHook from "./components/Hooks/CustomHooks/CustomHook.tsx";

import UseEffect from "./components/Hooks/useEffect.tsx";
import UseMemo from "./components/Hooks/useMemo.tsx";
import UseRef from "./components/Hooks/useRef.tsx";
import UseCallback from "./components/Hooks/useCallback.tsx";
import UseContext from "./components/Hooks/useContext.tsx";
import UseReducer from "./components/Hooks/useReducer.tsx";
import UseState from "./components/Hooks/useState.tsx";
import CreateReactApp from "./components/Home/Create-react-app.tsx";
import CreateViteApp from "./components/Home/Create-vite-app.tsx";
import OnBlurEvent from "./components/Events/onBlur.tsx";
import OnChangeEvent from "./components/Events/onChange.tsx";
import OnFocusEvent from "./components/Events/onFocus.tsx";
import RadioButtonEvent from "./components/Events/RadioButtonEvent.tsx";
import CheckboxEvent from "./components/Events/CheckboxEvent.tsx";
import InputValue from "./components/other/inputValue.tsx";
import RadioButtonValue from "./components/other/RadioButtonValue.tsx";
import CheckboxDefaultChecked from "./components/other/CheckboxDefaultChecked.tsx";
import InputDefaultValue from "./components/other/inputDefaultvalue.tsx";
import RadioButtonDefaultValue from "./components/other/RadioButtonDefaultValue.tsx";
import CheckboxChecked from "./components/other/Checkboxchecked.tsx";

import WebWorkerComponent from "./components/other/webworker";
import WindowWidthComponent from "./components/Hooks/CustomHooks/WindowWidthComponent.tsx";
import Tailwind from "./components/Styles/Tailwind.tsx";
import MemoComponent from "./components/Hooks/memo.tsx";
import LazyComponent from "./components/APIs/Lazy/Lazy.tsx";

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
        path: "/create-react-app",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CreateReactApp />
          </Suspense>
        ),
      },
      {
        path: "/create-vite-app",
        element: (
          <Suspense fallback={<>Laoding...</>}>
            <CreateViteApp />
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
      {
        path: "/apis/lazy",
        element: <LazyComponent />,
      },
      {
        path: "/apis/memo",
        element: <MemoComponent />,
      },
      {
        path: "/events/onBlur",
        element: <OnBlurEvent />,
      },
      {
        path: "/events/onChange",
        element: <OnChangeEvent />,
      },
      {
        path: "/events/onFocus",
        element: <OnFocusEvent />,
      },
      {
        path: "/events/RadioButtonEvent",
        element: <RadioButtonEvent />,
      },
      {
        path: "/events/CheckboxEvent",
        element: <CheckboxEvent />,
      },
      {
        path: "/other/webworker",
        element: <WebWorkerComponent />,
      },
      {
        path: "/other/inputValue",
        element: <InputValue />,
      },
      {
        path: "/other/RadioButtonValue",
        element: <RadioButtonValue />,
      },
      {
        path: "/other/CheckboxDefaultChecked",
        element: <CheckboxDefaultChecked />,
      },
      {
        path: "/other/inputDefaultvalue",
        element: <InputDefaultValue />,
      },
      {
        path: "/other/RadioButtonDefaultValue",
        element: <RadioButtonDefaultValue />,
      },
      {
        path: "/other/Checkboxchecked",
        element: <CheckboxChecked />,
      },
      {
        path: "/style/tailwindcss",
        element: <Tailwind />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
