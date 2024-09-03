import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="bg-black text-xl w-full p-4 flex justify-center items-center text-white  overflow-y-hidden gap-2">
        <Link
          to="/gettingSarted"
          className="flex gap-2 justify-center items-center"
        >
          <img className="h-6 " src="../public/react.svg" alt="" /> React
          Tutorial
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-59.8px)] ">
        <div className=" lg:col-span-2 w-full h-full bg-[#1f2229] text-white p-6 overflow-y-auto sidebar transition-all">
          <Sidebar />
        </div>
        <div className="w-full col-span-1 lg:col-span-10 bg-gray-200 h-full overflow-y-auto sidebar relative  ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
