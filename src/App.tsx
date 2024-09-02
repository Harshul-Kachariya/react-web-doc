import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="bg-black text-xl w-full p-5 flex justify-center items-center text-white">
        <Link to="/gettingSarted"> React Tutorial</Link>
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-4rem)]">
        <div className="col-span-3 w-full h-full bg-gray-800 text-white p-6 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="w-full col-span-9 bg-gray-200 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
