import { NavLink } from "react-router-dom";
// #C66CAC
// #286AD0
import {
  gettingStarted,
  Events,
  Hooks,
  other,
  styleSheets,
  Apis,
} from "../../lib/data";

const Sidebar = () => {
  return (
    <div className="sidebar space-y-4 ">
      <div>
        <NavLink to="/gettingSarted" className="text-xl font-bold ">
          Getting Started
        </NavLink>
        <nav className="ml-8">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {gettingStarted &&
              gettingStarted.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink to="" className="text-xl font-bold mb-4">
          Styles
        </NavLink>
        <nav className="ml-8  ">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {styleSheets &&
              styleSheets.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink to="/gettingSarted" className="text-xl font-bold mb-4">
          Hooks
        </NavLink>
        <nav className="ml-8  ">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Hooks &&
              Hooks.map((item) => (
                <li>
                  <NavLink
                    to={`/hooks${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink to="/gettingSarted" className="text-xl font-bold mb-4">
          APIs
        </NavLink>
        <nav className="ml-8  ">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Apis &&
              Apis.map((item) => (
                <li>
                  <NavLink
                    to={`${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink to="/gettingSarted" className="text-xl font-bold mb-4">
          Events
        </NavLink>
        <nav className="ml-8  ">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {Events &&
              Events.map((item) => (
                <li>
                  <NavLink
                    to={`/events${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div>
        <NavLink to="/gettingSarted" className="text-xl font-bold mb-4">
          Other
        </NavLink>
        <nav className="ml-8  ">
          <br />
          <ul className="text-lg flex justify-center items-start flex-col gap-2">
            {other &&
              other.map((item) => (
                <li>
                  <NavLink
                    to={`/other${item.slug}`}
                    className={({ isActive }) =>
                      !isActive
                        ? "  hover:text-gray-300 transition-all"
                        : " text-[#C66CAC] "
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
