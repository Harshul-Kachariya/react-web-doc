import { Link, Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/Layout";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Homepage from "./components/Home";

export default function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  console.log(location.pathname); // This will log the current pathname

  return (
    <div className="selection:bg-slate-300/40">
      <div className="bg-black text-xl w-full p-4 flex justify-center items-center text-white gap-2">
        <Link
          to="/gettingSarted"
          className="flex gap-2 justify-center items-center"
        >
          <img className="h-6" src="/react.svg" alt="" /> React Tutorial
        </Link>
      </div>
      <button
        className="text-xl lg:hidden text-white absolute top-5 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RiCloseLargeLine /> : <BsLayoutSidebarInset />}
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-12 h-[calc(100vh-59.8px)]">
        <div
          className={`${
            isOpen
              ? "flex translate-x-0"
              : "-translate-x-full lg:translate-x-0 hidden"
          } lg:flex lg:col-span-3 w-full h-screen lg:h-full bg-[#1f2229] text-white p-6 overflow-y-auto sidebar transition-transform duration-500 ease-in-out transform`}
        >
          <Sidebar setIsOpen={setIsOpen} />
        </div>
        <div className="w-full col-span-1 lg:col-span-9 bg-gray-200 h-full overflow-y-auto sidebar relative">
          {location.pathname === "/" && <Homepage />}
          <MainLayout>
            <Outlet />
          </MainLayout>
        </div>
      </div>
    </div>
  );
}
