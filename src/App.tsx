<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="bg-black text-xl w-full p-5 flex justify-center items-center text-white">
        React Tutorial
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-4rem)]">
        <div className="col-span-3 w-full h-full bg-gray-800 text-white p-6 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full col-span-9 bg-gray-200 h-full overflow-y-auto">
          <Outlet />
        </div>
=======
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
>>>>>>> 9d94f9ef8e89b3af809d213998abf4d7e2d52361
      </div>
    </>
  );
}

export default App;
