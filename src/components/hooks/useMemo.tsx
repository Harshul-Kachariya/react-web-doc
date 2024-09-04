import { useState, useMemo } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";

const UseMemo = () => {
  const [preview, setPreview] = useState(false);
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState(0);

  const memoizedValue = useMemo(
    () => ExpensiveCalculation(inputValue),
    [inputValue]
  );

  function ExpensiveCalculation(num: number) {
    console.log("Calculating...");
    return num * 2;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useMemo Hook</h1>
      <p className="text-xl mb-4 w-[80%]">
        The React <span className="text-red-500">useMemo</span> Hook returns a
        memoized value. It only recomputes the memoized value when one of the
        dependencies has changed. This can optimize performance by avoiding
        expensive calculations on every render.
      </p>
      <p className="text-lg font-bold mb-2">Import useMemo:</p>
      <CodeSnippets
        codeString={` import { useMemo } from "react"`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          To use the <span className="text-red-500">useMemo</span> Hook, wrap an
          expensive calculation or a derived state in
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
        <div className="col-span-1 p-2 bg-gray-400 rounded-lg my-5 min-h-48">
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
            <div className="relative top-1">
              <div className="flex flex-col gap-3">
                <input
                  type="tel"
                  onChange={(e) => setInputValue(Number(e.target.value))}
                  className="p-2 rounded-md hover:shadow-md outline-none w-36"
                />
                <span className="text-xl">Memoized Value: {memoizedValue}</span>
                <div className="mt-4">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => setCount(count + 1)}
                  >
                    You pressed me {count} times
                  </button>
                </div>
                <span className="text-xl">Render Count: {count}</span>
              </div>
              ) : (
              <div className="relative top-1">
                <div className="flex flex-col gap-3">
                  <input
                    type="tel"
                    value={memoizedValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    className="p-2 rounded-md hover:shadow-md outline-none w-36"
                  />
                  <span className="text-xl">
                    Memoized Value: {memoizedValue}
                  </span>
                  <div className="mt-4">
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount(count + 1)}
                    >
                      You pressed me {count} times
                    </button>
                  </div>
                  <span className="text-xl">Render Count: {count}</span>
                </div>
                <div className="absolute top-1 right-2">
                  <button
                    className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                    onClick={() => {
                      setCount(0);
                      setInputValue(0);
                    }}
                  >
                    <IoIosRefresh className="text-xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
