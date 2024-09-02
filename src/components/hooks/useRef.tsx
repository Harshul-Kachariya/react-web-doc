import CodeSnippets from "../CodeSnippets";

const UseRef = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useRef Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useRef</span> Hook allows you
          to persist values across renders without causing a re-render. It can
          be used to directly access a DOM element or to keep a mutable value
          around that doesn’t trigger a re-render when updated.
        </p>
        <p className="text-lg font-bold mb-2">Import useRef:</p>
        <CodeSnippets codeString={`import { useRef } from "react"`} />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            To use the <span className="text-red-500">useRef</span> Hook,
            initialize a ref with <span className="text-red-500">useRef()</span>{" "}
            and attach it to a DOM element or use it to store a mutable value.
          </p>
          <CodeSnippets
            codeString={`import { useRef, useEffect } from "react";

function ExampleComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on mount" />
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

export default UseRef;
