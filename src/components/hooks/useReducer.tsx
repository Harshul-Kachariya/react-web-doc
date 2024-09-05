import { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
import CodeSnippets from "../CodeSnippets";
import CodePreview from "../PreviewBox";

const UseReducer = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useReducer Hook</h1>
      <p className="text-xl mb-4 ">
        The React <span className="text-red-500">useReducer</span> Hook is an
        alternative to <span className="text-red-500">useState</span> for
        managing complex state logic in a component. It’s particularly useful
        for managing state that involves multiple sub-values or when the next
        state depends on the previous one.
      </p>
      <p className="text-lg font-bold mb-2">Import useReducer:</p>
      <CodeSnippets
        codeString={` import { useReducer } from "react"`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          To use the <span className="text-red-500">useReducer</span> Hook,
          define a reducer function that takes the current state and an action,
          then returns a new state. Use{" "}
          <span className="text-red-500">useReducer</span>
          to get the current state and a dispatch function to update it.
        </p>
        <CodeSnippets
          codeString={`import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
`}
        />

        <CodePreview className="mt-5 ">
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
              <div className="flex flex-col gap-3">
                <div className="mt-4 flex flex-col gap-3">
                  <span className="text-xl">Count: {count}</span>
                  <div className="space-x-3">
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount(count + 1)}
                    >
                      Increment
                    </button>
                    <button
                      className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                      onClick={() => setCount(count - 1)}
                    >
                      Decrement
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute top-1 right-2">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => {
                    setCount(0);
                  }}
                >
                  <IoIosRefresh className="text-xl text-white hover:transition-all hover:duration-1000 hover:rotate-180 " />
                </button>
              </div>
            </div>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default UseReducer;
