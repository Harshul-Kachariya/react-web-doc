import { Link } from "react-router-dom";
import { Hooks } from "../../lib/data";

const Sidebar = () => {
  return (
    <div>
      <div className="text-2xl font-bold mb-4">Hooks</div>
      <nav>
        <ul className="text-lg flex justify-center items-start flex-col gap-2">
          {Hooks &&
            Hooks.map((item) => (
              <li>
                <Link to={`/hooks${item.slug}`} className="hover:text-gray-300">
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
