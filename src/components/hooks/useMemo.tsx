import CodeSnippets from "../CodeSnippets";

const UseMemo = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useMemo Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useMemo</span> Hook returns a
          memoized value. It only recomputes the memoized value when one of the
          dependencies has changed. This can optimize performance by avoiding
          expensive calculations on every render.
        </p>
        <p className="text-lg font-bold mb-2">Import useMemo:</p>
        <CodeSnippets codeString={`import { useMemo } from "react"`} />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            To use the <span className="text-red-500">useMemo</span> Hook, wrap
            an expensive calculation or a derived state in
            <span className="text-red-500"> useMemo()</span> and provide a
            dependency array.
          </p>
          <CodeSnippets
            codeString={`import { useState, useMemo } from "react";

function ExpensiveCalculation(num) {
  console.log("Calculating...");
  return num * 2;
}

function ExampleComponent() {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => ExpensiveCalculation(inputValue), [inputValue]);

  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>Render Count: {count}</p>
    </div>
  );
}

export default ExampleComponent;
`}
          />
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
