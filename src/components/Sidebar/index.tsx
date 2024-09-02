import { Link } from "react-router-dom";
import { gettingStarted, Hooks } from "../../lib/data";

const Sidebar = () => {
  return (
    <div className="sidebar space-y-4">
      <div>
        <Link to="/gettingSarted" className="text-xl font-bold mb-4">
          Gettin Statrted
        </Link>
        <nav className="ml-10">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {gettingStarted &&
              gettingStarted.map((item, i) => (
                <li key={i}>
                  <Link to={`${item.slug}`} className="hover:text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <div className="text-xl font-bold mb-4">Hooks</div>
        <nav className="ml-10">
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Hooks &&
              Hooks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/hooks${item.slug}`}
                    className="hover:text-gray-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
