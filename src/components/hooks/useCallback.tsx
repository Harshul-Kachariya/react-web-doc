import CodeSnippets from "../CodeSnippets";

const UseCallback = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useCallback Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useCallback</span> Hook
          returns a memoized version of the callback function that only changes
          if one of the dependencies has changed. It helps optimize performance
          by preventing unnecessary re-renders of components that rely on the
          callback function.
        </p>
        <p className="text-lg font-bold mb-2">Import useCallback:</p>
        <CodeSnippets codeString={`import { useCallback } from "react"`} />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            To use the <span className="text-red-500">useCallback</span> Hook,
            wrap your callback function in{" "}
            <span className="text-red-500">useCallback()</span>
            and provide a dependency array.
          </p>
          <CodeSnippets
            codeString={`import { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoized callback function
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // Empty dependency array means it won't change

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log("Child rendered");
  
  return <button onClick={onClick}>Click me</button>;
}

export default ParentComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default UseCallback;
