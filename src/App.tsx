import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="bg-black text-xl w-full p-4 flex justify-center items-center text-white  overflow-y-hidden gap-2">
        <img className="h-6 " src="../public/react.svg" alt="" />
        <Link to="/gettingSarted"> React Tutorial</Link>
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-3.8rem)] ">
        <div className="col-span-3 w-full h-full bg-[#1f2229] text-white p-6 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full col-span-9 bg-gray-200 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
