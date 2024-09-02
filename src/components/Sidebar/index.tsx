import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Hooks</div>
      <nav>
        <ul className="text-lg flex justify-center items-start flex-col gap-2">
          <li>
            <Link to="/hooks/useState" className="hover:text-gray-300">
              useState
            </Link>
          </li>
          <li>
            <Link to="/hooks/useEffect" className="hover:text-gray-300">
              useEffect
            </Link>
          </li>
          <li>
            <Link to="/hooks/useRef" className="hover:text-gray-300">
              useRef
            </Link>
          </li>
          <li>
            <Link to="/hooks/useContext" className="hover:text-gray-300">
              useContext
            </Link>
          </li>
          <li>
            <Link to="/hooks/useReducer" className="hover:text-gray-300">
              useReducer
            </Link>
          </li>
          <li>
            <Link to="/hooks/useCallback" className="hover:text-gray-300">
              useCallback
            </Link>
          </li>
          <li>
            <Link to="/hooks/useMemo" className="hover:text-gray-300">
              useMemo
            </Link>
          </li>
          <li>
            <Link to="/hooks/custom" className="hover:text-gray-300">
              Custom Hooks
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
