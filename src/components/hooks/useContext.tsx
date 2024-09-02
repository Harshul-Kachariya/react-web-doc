import CodeSnippets from "../CodeSnippets";

const UseContext = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useContext Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useContext</span> Hook allows
          you to use the context directly in your functional components. It
          simplifies accessing context values without needing to use a Context
          Consumer component.
        </p>
        <p className="text-lg font-bold mb-2">Import useContext:</p>
        <CodeSnippets codeString={`import { useContext } from "react"`} />
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
        </div>
      </div>
    </div>
  );
};

export default UseContext;
