import { useState } from "react";
import CodeSnippets from "../CodeSnippets";

const ReactRouter = () => {
  const routes = ["Home", "Blogs", "Content", "NoPage"];

  const [preview, setPreview] = useState<boolean>(false);
  const [routeName, setRouteName] = useState<string>("Home");

  const handleClick = (route: string) => {
    setRouteName(route);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#282c34]">React Router</h1>
      <p className="text-xl mb-4">
        Create React App doesn't include page routing.
      </p>
      <p className="text-xl mb-4 ">
        React Router is the most popular solution.
      </p>

      <h1 className="text-2xl font-bold mb-4 text-[#282c34]">
        Add React Router
      </h1>
      <p className="text-xl mb-4 ">
        To add React Router in your application, run this in the terminal from
        the root directory of the application:
      </p>

      <CodeSnippets
        codeString={` #use npm
 npm i react-router-dom
 #use yarn
 yarn add react-router-dom`}
        showLineNumbers={false}
      />

      <div className="mt-5">
        <p className="text-xl mb-2 ">
          To create an application with multiple page routes, let's first start
          with the file structure.
        </p>
        <p className="text-xl mb-2 ">
          Within the src folder, we'll create a folder named pages with several
          files:
        </p>
        <CodeSnippets
          codeString={`src/pages/:
  ├── Layout.js
  ├── Home.js
  ├── Blogs.js
  ├── Contact.js
  └── NoPage.js`}
          showLineNumbers={false}
        />
        <p className="text-xl mb-2 ">
          Each file will contain a very basic React component.
        </p>
      </div>
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-xl font-bold mb-2 text-[#282c34]">Example:</h2>
        <p className="mb-2 text-lg">
          Use React Router to route to pages based on URL:
        </p>
        <h2 className="text-2xl font-bold font-mono mb-2 text-[#282c34]">
          index.js
        </h2>
        <div className="flex flex-col gap-4">
          <CodeSnippets
            codeString={`import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
          />
          <div className=" p-2 bg-gray-400 rounded-lg ">
            {!preview ? (
              <div>
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            ) : (
              <div className="relative top-1 min-h-40 ">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-600"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-600"></span>
                    <span className="w-3 h-3 rounded-full bg-green-600"></span>
                  </div>
                  <div className="w-full h-7 rounded-xl bg-gray-300  px-2">
                    http://localhost:5173/{routeName}
                  </div>
                </div>
                <div className="flex gap-3">
                  {routes.map((item) => (
                    <button
                      className={`${
                        item === routeName ? "text-red-600" : "text-blue-900"
                      }    underline `}
                      onClick={() => handleClick(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <hr className="mt-2" />
                <div className="text-xl">
                  {routeName} Page {routeName === "NoPage" && "Found"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactRouter;
