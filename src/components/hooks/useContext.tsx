import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";

const UseContext = () => {
  const [preview, setPreview] = useState(false);

  const [value, setValue] = useState("Hello from context");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useContext Hook</h1>
      <p className="text-xl mb-4 ">
        The React <span className="text-red-500">useContext</span> Hook allows
        you to use the context directly in your functional components. It
        simplifies accessing context values without needing to use a Context
        Consumer component.
      </p>
      <p className="text-lg font-bold mb-2">Import useContext:</p>
      <CodeSnippets
        codeString={` import { useContext } from "react"`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          To use the <span className="text-red-500">useContext</span> Hook,
          first create a context using{" "}
          <span className="text-red-500">React.createContext</span>. Then, use
          the <span className="text-red-500">useContext</span> Hook to consume
          the context in a component.
        </p>
        <CodeSnippets
          codeString={`import { createContext, useContext, useState } from "react";

// Create a Context with a default value
const MyContext = createContext("default value");

function ProviderComponent({ children }) {
  const [value, setValue] = useState("Hello from context");

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}

function ConsumerComponent() {
  const contextValue = useContext(MyContext);

  return <p>Context Value: {contextValue}</p>;
}

function App() {
  return (
    <ProviderComponent>
      <ConsumerComponent />
    </ProviderComponent>
  );
}

export default App;
`}
        />
        <div className="col-span-1 p-2 bg-gray-400 rounded-lg my-5 ">
          {!preview ? (
            <div>
              <div className="space-x-3 ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            </div>
          ) : (
            <div className="relative top-1 min-h-48">
              <p className="text-xl">Context Value: {value}</p>
              <div className="absolute top-1 right-2">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => {}}
                >
                  <IoIosRefresh className="text-xl text-white hover:transition-all hover:duration-1000 hover:rotate-180 " />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseContext;
