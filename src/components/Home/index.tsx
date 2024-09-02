import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <section className="bg-slate-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to React Documentation
          </h2>
          <p className="text-lg mb-8">
            Discover the power of building interactive user interfaces with
            React. Learn from the official documentation and get started today!
          </p>
          <Link
            to="/gettingSarted"
            className="bg-white text-slate-600 py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Use React?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-2">Component-Based</h4>
              <p className="text-gray-700">
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-2">Declarative</h4>
              <p className="text-gray-700">
                React makes it painless to create interactive UIs with
                declarative components.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold mb-2">
                Fast Learning Curve
              </h4>
              <p className="text-gray-700">
                React has a small API surface area and a shallow learning curve,
                so developers can quickly get up to speed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
