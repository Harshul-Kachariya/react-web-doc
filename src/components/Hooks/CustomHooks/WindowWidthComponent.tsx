import { useNavigate } from "react-router-dom";
import useWindowWidth from "./useWindowWidth";

const WindowWidthComponent = () => {
  const width = useWindowWidth();

  const navigate = useNavigate();

  return (
    <div className="p-4 text-center bg-[#282c34] text-gray-100  min-h-96 ">
      <div>
        <h2 className="text-2xl font-bold ">Window Width Tracker</h2>
        <p className="text-lg mt-4 ">
          The current window width is:{" "}
          <span className="font-mono text-2xl">
            <span className="text-red-400 ">{width}</span>px
          </span>
        </p>
        <div className="flex flex-col gap-3 justify-center items-center">
          click on back to go previous
          <button
            onClick={() => navigate(-1)}
            className="text-xl bg-gray-200 p-2 text-black rounded-md hover:shadow-sm hover:shadow-white w-52"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowWidthComponent;
