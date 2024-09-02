import CodeSnippets from "../CodeSnippets";

const UseEffect = () => {
  return (
    <div className="flex justify-center items-start ">
      <div className=" p-8 w-3/4">
        <h1 className="text-3xl font-bold mb-4">React useEffect Hook</h1>
        <p className="text-xl mb-4 w-[80%]">
          The React <span className="text-red-500">useEffect</span> Hook allows
          you to perform side effects in your function components. Some examples
          of side effects are: fetching data, directly updating the DOM, and
          timers.
        </p>
        <p className="text-lg font-bold mb-2">Import useEffect :</p>
        <CodeSnippets codeString={`import { useEffect } from "react"`} />
        <div className="bg-gray-200 rounded-lg py-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Example:</h2>
          <p className="mb-2 text-lg">
            At the top of your component,{" "}
            <span className="text-red-500">import</span> the
            <span className="text-red-500"> useEffect</span> Hook.
          </p>
          <CodeSnippets
            codeString={`import { useEffect, useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`}
          />
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
